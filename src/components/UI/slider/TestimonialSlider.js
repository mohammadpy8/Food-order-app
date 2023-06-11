import React from 'react';
import Slider from "react-slick";

import ava01 from "../../../assets/images/ava-1.jpg";
import ava02 from "../../../assets/images/ava-2.jpg";
import ava03 from "../../../assets/images/ava-3.jpg";

import "../../../styles/slider.css";

const TestimonialSlider = () => {

    const settings = {

        dots: true,
        autoplay: true,
        infinite: true,
        speed: 1000,
        autoplaySpeed: 3000,
        swipeToSlide: true,
        slidesToShow:1,
        slidesToScroll:1,
    }

    return (

        <Slider {...settings}>

            <div>
                <p className='review__text'>Lorem ipsum dolor sit amet, consectetuer
                    adipiscing elit, sed diam nonummy nibh euismod
                    tincidunt ut laoreet dolore magna aliquam erat volutpat.
                    Ut wisi enim ad minim veniam,
                </p>
                <div className='slider__content d-flex align-items-center gap-3'>
                    <img src={ava01} alt="ava1" className=' rounded'/>
                    <h6>MOHAMMAD</h6>
                </div>
            </div>
            <div>
            <p className='review__text'>Lorem ipsum dolor sit amet, consectetuer
                    adipiscing elit, sed diam nonummy nibh euismod
                    tincidunt ut laoreet dolore magna aliquam erat volutpat.
                    Ut wisi enim ad minim veniam, 
                </p>
                <div className='slider__content d-flex align-items-center gap-3'>
                    <img src={ava02} alt="ava2" className=' rounded' />
                    <h6>ZAHRA</h6>
                </div>
            </div>
            <div>
            <p className='review__text'>Lorem ipsum dolor sit amet, consectetuer
                    adipiscing elit, sed diam nonummy nibh euismod
                    tincidunt ut laoreet dolore magna aliquam erat volutpat.
                    Ut wisi enim ad minim veniam, 
                </p>
                <div className='slider__content d-flex align-items-center gap-3'>
                    <img src={ava03} alt="ava3" className=' rounded'/>
                    <h6>MOHAMMAD ALI</h6>
                </div>
            </div>

        </Slider>
    );
};

export default TestimonialSlider;