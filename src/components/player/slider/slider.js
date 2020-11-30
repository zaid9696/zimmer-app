import React from 'react';
import Slider from "react-slick";

import './slider.styles.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


class SliderCovers extends React.Component  {

  componentDidUpdate(prevProps, prevState) {


        if(prevProps.index !== this.props.index){

              this.handleSlickGoTo();
        }


  }

  handleSlickGoTo =  () => {

        console.log(this.props.index);
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
      responsive: [
        {
          breakpoint: 1142,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 900,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
          }
        },
        {
          breakpoint: 630,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
          }
        },
      ]
    };

    let clicks = [];
    let timeout;

  function singleClick(event) {

  }

  function doubleClick(event) {
      const i = parseInt(event.dataset.index);
      Click(i)

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


      return (
        <div className="slider">

        <Slider ref={slider => (this.slider = slider)} {...settings}>
        {
          listPlay.map((item, i) => (
            <div key={i} onClick={clickHandler} className="slider__item">
            <div className="slider__item-content">
            <img src={item.cover} alt={item.name} data-index={i} />
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
