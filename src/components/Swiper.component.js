
import React, { useEffect, useRef, useState } from "react";
import { connect } from 'react-redux'
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import "../style/Swiper.css";
import SwiperCore, { Pagination } from 'swiper';
// install Swiper modules
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
        let newest = [];
        useEffect(() => {
            let arr =[...programs] 
            arr.sort((p1, p2) => {
                p1.publishDate &&  new Date(p1.publishDate) -p2.publishDate && new Date(p2.publishDate)
            }) 
            debugger
        })
        return (
            <>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    centeredSlides={true}
                    pagination={{
                        "clickable": true
                    }} className="mySwiper">
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 5</SwiperSlide>
                </Swiper>
            </>
        )
    })