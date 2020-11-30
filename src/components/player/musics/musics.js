
import React from 'react';
import AudioPlayer from 'react-h5-audio-player';

import carbonPlay from '../../../assets/imgs/carbon-play.svg';
import carbonPause from '../../../assets/imgs/pause.svg';
import forward from '../../../assets/imgs/skip-forward.svg';
import backward from '../../../assets/imgs/skip-back.svg';
import volume from '../../../assets/imgs/volume.svg';
import mute from '../../../assets/imgs/mute.svg';


import './musics.styles.scss';
import 'react-h5-audio-player/lib/styles.css';



const Musics = ({handleClickNext, handleClickPrev, playList, currentMusicIndex, setMusic, setIsPlaying}) =>{


return  (
  <div className="musics">
    <AudioPlayer
      autoPlayAfterSrcChange={true}
      showSkipControls={true}
      showJumpControls={false}
      onPlayError={() => setMusic(0)}
      src={currentMusicIndex === 0 || currentMusicIndex ? playList[currentMusicIndex].src : 0 }
      onClickPrevious={() => handleClickPrev()}
      onClickNext={() => handleClickNext()}
      onPlay={() => setIsPlaying(true)}
      onPause={() => setIsPlaying(false)}
      customIcons={{
        play: <img src={carbonPlay} alt="play button" />,
        pause: <img src={carbonPause} alt="pause button" />,
        next: <img className="arrows" src={forward} alt="forward button" />,
        previous: <img className="arrows" src={backward} alt="backward button" />,
        volume: <img  src={volume} alt="volume button" />,
        volumeMute: <img  src={mute} alt="mute button" />,
      }}
      customAdditionalControls={[]}
    />
  </div>

);
}

export default Musics;
