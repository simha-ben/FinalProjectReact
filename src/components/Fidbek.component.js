import React, { useState, useRef } from 'react';
import { Carousel ,InputGroup,FormControl, Button} from 'react-bootstrap'
import '../style/Fidbek.css'
import img1 from '../images/פידבק/1.JPG'
import img2 from '../images/פידבק/2.JPG'
import img3 from '../images/פידבק/3.JPG'
import img4 from '../images/פידבק/4.JPG'
import img5 from '../images/פידבק/5.JPG'
import img6 from '../images/פידבק/6.JPG'
import { cleanup } from '@testing-library/react';
export default function Fidbek() {
    let ref = useRef()
    function clean() {
        ref.current.value = ""
    }

    return (
        <div style={{ width: '60vw', marginRight: '40vh' }}>
            {/* <h3>לקוחות ממליצים</h3> */}
            <Carousel variant="dark " interval={2000}>
                <Carousel.Item>
                    <img
                        className="d-block imgSlider "
                        src={img1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block imgSlider"
                        src={img2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block imgSlider"
                        src={img3}
                        alt="Second slide"
                    />
                </Carousel.Item><Carousel.Item>
                    <img
                        className="d-block imgSlider"
                        src={img4}
                        alt="Second slide"
                    />
                </Carousel.Item><Carousel.Item>
                    <img
                        className="d-block imgSlider"
                        src={img5}
                        alt="Second slide"
                    />
                </Carousel.Item><Carousel.Item>
                    <img
                        className="d-block imgSlider"
                        src={img2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block imgSlider"
                        src={img6}
                        alt="Second slide"
                    />
                </Carousel.Item>
            </Carousel>
            <br></br>
           
            <InputGroup className="mb-3">
                <InputGroup.Text>רוצה לפדבק? זה המקום{"--->"}</InputGroup.Text>
                <FormControl ref={ref} />
                <Button variant="outline-secondary" id="button-addon2"onClick={clean}>שלח</Button>
            </InputGroup>
            

        </div>



    )
}