
import React, {useState} from 'react';

import SliderCovers from './slider/slider';
import MusicSpinner from './musicSpinner/musicSpinner';
import Musics from './musics/musics';

import './player.styles.scss';


import batmanAudio from '../../assets/audio/batman.mp3';
import codeAudio from '../../assets/audio/code.mp3';
import gladiatorAudio from '../../assets/audio/gladiator.mp3';
import interstellarAudio from '../../assets/audio/Interstellar.mp3';
import moutainsAudio from '../../assets/audio/moutains.mp3';
import piratesAudio from '../../assets/audio/pirates.mp3';
import rushAudio from '../../assets/audio/rush.mp3';
import supermanAudio from '../../assets/audio/superman.mp3';
import timeAudio from '../../assets/audio/time.mp3';
import whyAudio from '../../assets/audio/why.mp3';

import batmanCover from '../../assets/imgs/batman.png';
import gladiatorCover from '../../assets/imgs/gladiator.jpg';
import interstellarCover from '../../assets/imgs/Interstellar.jpg';
import moutainsCover from '../../assets/imgs/mountains.jpg';
import piratesCover from '../../assets/imgs/pirates.jpg';
import rushCover from '../../assets/imgs/rush.jpg';
import supermanCover from '../../assets/imgs/superman.png';
import timeCover from '../../assets/imgs/time.jpg';
import whyCover from '../../assets/imgs/why.jpg';
import codeCover from '../../assets/imgs/code.jpg';

const playList = [
  {name: 'Hans Zimmer - Interstellar - Main Theme', src: interstellarAudio, cover: interstellarCover, id: 0, duration: '4:08'},
  {name: 'Hans Zimmer - Time', src: timeAudio, cover: timeCover, id:1, duration: '4:36'},
  {name: 'Hans Zimmer - Why do we fall', src: whyAudio, cover: whyCover, id:2, duration: '2:02'},
  {name: 'Hans Zimmer - Now we are free', src: gladiatorAudio, cover: gladiatorCover, id: 3,duration: '4:14'},
  {name: 'Hans Zimmer - Moutains', src: moutainsAudio, cover: moutainsCover, id: 4,duration: '3:39'},
  {name: "Hans Zimmer - Pirates of the Caribbean: Dead Man's Chest", src: piratesAudio, cover: piratesCover, id: 5,duration: '2:11'},
  {name: 'Hans Zimmer - Flight', src: supermanAudio, cover: supermanCover, id: 6,duration: '4:13'},
  {name: 'Hans Zimmer - The Dark Knight Main Theme', src: batmanAudio, cover: batmanCover, id:7, duration: '4:50'},
  {name: 'Hans Zimmer - Lost but won', src: rushAudio, cover: rushCover, id:8,duration: '6:16'},
  {name: 'Hans Zimmer - Chevaliers de Sangreal', src: codeAudio,cover: codeCover, id: 9,duration: '4:08'},
];






const Player = () => {

  const [currentMusicIndex, setCurrentMusicIndex] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleIsPlaying = (falseOrTrue) => {

      setIsPlaying(falseOrTrue);
      console.log(isPlaying);
  }

  const handleClickPrev = () => {

    // console.log(currentMusicIndex);
    setCurrentMusicIndex((prevState) => prevState === 0 || prevState === null ? playList.length - 1 : prevState - 1);
  }

  const handleClickNext = () => {
    setCurrentMusicIndex((prevState) => prevState < playList.length - 1 ? prevState + 1 : 0 );
  }

  const handleChangeAudio = (audioIndex) => {

    console.log(audioIndex);
    setCurrentMusicIndex(audioIndex);

  }

  return (

    <div className="player">
      <div className="slider__line"></div>
        <SliderCovers Click={(audioIndex) => handleChangeAudio(audioIndex)} listPlay={playList} index={currentMusicIndex}/>
      <div className="slider__line"></div>
      <MusicSpinner isPlaying={isPlaying} playList={playList} musicIndex={currentMusicIndex}/>
      <Musics setIsPlaying={handleIsPlaying} handleClickNext={handleClickNext} handleClickPrev={handleClickPrev} playList={playList} setMusic={setCurrentMusicIndex} currentMusicIndex={currentMusicIndex} />

    </div>

  );
}

export default Player;
