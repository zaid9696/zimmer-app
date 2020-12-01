import React from 'react';
import AliceCarousel from 'react-alice-carousel';

import './slider.styles.scss';
import 'react-alice-carousel/lib/alice-carousel.css';


class SliderCovers extends React.Component  {


  render () {

    const {listPlay, Click, index} = this.props;

    let clicks = [];
    let timeout;

  function singleClick(event) {

  }

  function doubleClick(event) {
      const i = parseInt(event.dataset.index);
      if(event.matches('.slider__item-duration') || event.matches('.slider__item-title')){
        return ;
      }
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



    const playListSliders = listPlay.map((item, i) => (
      <div key={i} onClick={clickHandler} className={`slider__item ${index === i ? 'slider__active' : ''}`}>
      <div className="slider__item-content" data-index={i}>
      <img src={item.cover} alt={item.name} />
      <span className="slider__item-duration">{item.duration}</span>
      </div>
      <h3 className="slider__item-title">{item.name}</h3>
      </div>
    ));

    const slideItems = {  0: {
                          items: 1,
                        },
                        500: {
                          items: 2
                        },
                        900: {
                          items: 3
                        },
                        1140: {
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
