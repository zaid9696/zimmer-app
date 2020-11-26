
import React from 'react';
import AudioPlayer from 'react-h5-audio-player';

import './musics.styles.scss';
import 'react-h5-audio-player/lib/styles.css';



const Musics = ({handleClickNext, handleClickPrev, playList, currentMusicIndex, setMusic}) =>{


return  (
  <div>
    <AudioPlayer
      autoPlayAfterSrcChange={true}
      showSkipControls={true}
      showJumpControls={false}
      onPlayError={() => setMusic(0)}
      src={currentMusicIndex === 0 || currentMusicIndex ? playList[currentMusicIndex].src : 0 }
      onClickPrevious={() => handleClickPrev()}
      onClickNext={() => handleClickNext()}
    />
  </div>

);
}

export default Musics;
