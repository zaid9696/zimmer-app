import React from 'react';
import Slider from "react-slick";
import AliceCarousel from 'react-alice-carousel';

import './slider.styles.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-alice-carousel/lib/alice-carousel.css';


class SliderCovers extends React.Component  {

  // componentDidUpdate(prevProps, prevState) {
  //
  //
  //       if(prevProps.index !== this.props.index){
  //
  //             this.handleSlickGoTo();
  //       }
  //
  //
  // }

  // handleSlickGoTo =  () => {
  //
  //
  //       let fakeIndex = this.props.index - 1;
  //       if(this.props.index === 0) fakeIndex = 0;
  //
  //      // this.slider.slickGoTo(fakeIndex);
  //      // this.slider.slickGoTo(1)
  //      console.log(this.props.index);
  //      this.slider.slickGoTo(this.props.index)
  //      setTimeout(() => this.slider.slickGoTo(this.props.index) ,1000);
  //
  // }

  render () {

    const {listPlay, Click, index} = this.props;

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      focusOnSelect: true,
      arrows: false,


    };

    let clicks = [];
    let timeout;

  function singleClick(event) {

  }

  function doubleClick(event) {
      const i = parseInt(event.dataset.index);
      Click(i)
      // console.log(event);
      // console.log(i);

  }

    function clickHandler(event) {
          event.preventDefault();
          clicks.push(new Date().getTime());
          window.clearTimeout(timeout);
          timeout = window.setTimeout(() => {
              if (clicks.length > 1 && clicks[clicks.length - 1] - clicks[clicks.length - 2] < 250) {
                  doubleClick(event.target);
              } else {
                  singleClick(event.target);
              }
          }, 250);
}

// <Slider ref={slider => (this.slider = slider)} {...settings}>
//
// </Slider>

    const playListSliders = listPlay.map((item, i) => (
      <div key={i} onClick={clickHandler} className={`slider__item ${index === i ? 'slider__active' : ''}`}>
      <div className="slider__item-content" data-index={i}>
      <img src={item.cover} alt={item.name} />
      <span className="slider__item-duration">{item.duration}</span>
      </div>
      <h3>{item.name}</h3>
      </div>
    ));

    const slideItems = {  0: {
                          items: 1,
                        },
                        1024: {
                          items: 4
                        }
                  }

      return (
        <div className="slider">

            <AliceCarousel  mouseTracking
               responsive={slideItems}
               items={playListSliders}
               infinite={true}
               activeIndex={index}
               animationDuration={500}
               disableButtonsControls={true}
               disableDotsControls={true}
               />
        </div>
      );
  }

};


export default SliderCovers;
