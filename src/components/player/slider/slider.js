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
       setTimeout(() => this.slider.slickGoTo(this.props.index) ,1050)

  }

  render () {

    const {listPlay, Click} = this.props;

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      focusOnSelect: true,
      arrows: false,


    };


      return (
        <div className="slider">

        <button onClick={() => this.handleSlickGoTo()}>SlideGoTo</button>
        <Slider ref={slider => (this.slider = slider)} {...settings}>
        {
          listPlay.map((item, i) => (
            <div key={i} onDoubleClick={() => Click(i)} className="slider__item">
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
  }

};


export default SliderCovers;
