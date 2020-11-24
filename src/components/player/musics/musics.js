
import React from 'react';
import AudioPlayer from 'react-h5-audio-player';

import './musics.styles.scss';
import 'react-h5-audio-player/lib/styles.css';



const Musics = ({handleClickNext, handleClickPrev, playList, currentMusicIndex}) => (

  <div>
    <AudioPlayer
      autoPlayAfterSrcChange={true}
      showSkipControls={true}
      showJumpControls={false}
      src={playList[currentMusicIndex].src}
      onClickPrevious={() => handleClickPrev()}
      onClickNext={() => handleClickNext()}
    />
  </div>

);


export default Musics;
