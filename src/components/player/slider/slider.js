import React from 'react';
import Slider from "react-slick";

import './slider.styles.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const SliderCovers = ({listPlay}) => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    focusOnSelect: true,
    arrows: false,
    centerPadding: '1px'

  };

  // style={{
  //   backgroundImage: `url(${item.cover})`
  // }}


  return (
      <div className="slider">


        <Slider {...settings}>
        {
          listPlay.map((item) => (
            <div className="slider__item">
                <div className="slider__item-content">
                <img src={item.cover} alt={item.name} />
                <h3>{item.name}</h3>
                </div>
            </div>
          ))
        }
        </Slider>

      </div>
  );
};


export default SliderCovers;
