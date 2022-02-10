
import React, { useEffect, useRef, useState } from "react";
import { connect } from 'react-redux'
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import "../style/Swiper.css";
import SwiperCore, { Pagination } from 'swiper';
import ShowProgram from "./ShowProgram.component";

SwiperCore.use([Pagination]);
function mapStateToProps(state) {
    return {
        programs: state.ProgramReducer.programs,
    };
}
function mapDispatchToProps(dispatch) {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)
    (function MySwiper(props) {
        let { programs } = props;
        const [newest, setNewest] = useState([]);
        useEffect(() => {
            let arr = [...programs]
            let p = arr.sort(function (p1, p2) {
                return (new Date(p1.publishDate) - new Date(p2.publishDate))
            })
            setNewest(p.slice(0, 5))
        }, [programs])
        return (
            <div className="swiperDiv">
                <Swiper
                
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
                    slidesPerView={4}
                    spaceBetween={-50}
                    centeredSlides={false}
                    breakpoints={{
                        0: {
                          width: 1000,
                          slidesPerView: 1,
                        },
                        500: {
                            width: 1200,
                            slidesPerView: 2,
                          },
                        750: {
                          width: 1200,
                          slidesPerView: 3,
                        },
                        1200: {
                          width: 1200,
                          slidesPerView: 3,
                        },
                    }}
                    pagination={{
                        "clickable": true
                    }} 
                    className="mySwiper"
                    style={{paddingBottom:'60px'}}
                >
                    {
                        newest && newest.map((item, index) => (
                            < SwiperSlide >
                                <span style={{paddingRight:'40px',width:'100%',height:'100%',backgroundColor:'#f8f8f8'}}>
                                    <ShowProgram program={item} ></ShowProgram >
                                </span>
                            </SwiperSlide>
                        ))
                    }

                </Swiper>
            </div>
        )
    })