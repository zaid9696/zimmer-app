import React from 'react';
import Slider from "react-slick";

import './slider.styles.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


class SliderCovers extends React.Component  {

  componentDidUpdate(prevProps, prevState) {

      this.handleSlickGoTo();
  }

  handleSlickGoTo =  () => {

        let fakeIndex = this.props.index - 1;
        if(this.props.index === 0) fakeIndex = 0;

       this.slider.slickGoTo(fakeIndex);
       setTimeout(() => this.slider.slickGoTo(this.props.index) ,590);

  }

  render () {

    const {listPlay, Click} = this.props;

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 2,
      focusOnSelect: true,
      arrows: false,


    };


      return (
        <div className="slider">

        <Slider ref={slider => (this.slider = slider)} {...settings}>
        {
          listPlay.map((item, i) => (
            <div key={i} onDoubleClick={() => Click(i)} className="slider__item">
            <div className="slider__item-content">
            <img src={item.cover} alt={item.name} />
            <span className="slider__item-duration">{item.duration}</span>
            <h3>{item.name}</h3>
            </div>
            </div>
          ))
        }
        </Slider>

        </div>
      );
  }

};


export default SliderCovers;
