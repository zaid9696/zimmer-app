
import React, {useState} from 'react';

import SliderCovers from './slider/slider';
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
  {name: 'Hans Zimmer - Interstellar - Main Theme', src: interstellarAudio, cover: interstellarCover, id: 0},
  {name: 'Hans Zimmer - Time', src: timeAudio, cover: timeCover, id:1},
  {name: 'Hans Zimmer - Why do we fall', src: whyAudio, cover: whyCover, id:2},
  {name: 'Hans Zimmer - Now we are free', src: gladiatorAudio, cover: gladiatorCover, id: 3},
  {name: 'Hans Zimmer - Moutains', src: moutainsAudio, cover: moutainsCover, id: 4},
  {name: "Hans Zimmer - Pirates of the Caribbean: Dead Man's Chest", src: piratesAudio, cover: piratesCover, id: 5},
  {name: 'Hans Zimmer - Flight', src: supermanAudio, cover: supermanCover, id: 6},
  {name: 'Hans Zimmer - The Dark Knight Main Theme', src: batmanAudio, cover: batmanCover, id:7},
  {name: 'Hans Zimmer - Lost but won', src: rushAudio, cover: rushCover, id:8},
  {name: 'Hans Zimmer - Chevaliers de Sangreal', src: codeAudio,cover: codeCover, id: 9},
];


const Player = () => {

  const [currentMusicIndex, setCurrentMusicIndex] = useState(0);



  const handleClickPrev = () => {

    console.log(currentMusicIndex);
    setCurrentMusicIndex((prevState) => prevState === 0 ? playList.length - 1 : prevState - 1);
  }

  const handleClickNext = () => {
    setCurrentMusicIndex((prevState) => prevState < playList.length - 1 ? prevState + 1 : 0 );
  }

  const handleChangeAudio = (audioIndex) => {
  
    setCurrentMusicIndex(audioIndex);

  }
  console.log(currentMusicIndex);

  return (

    <div>

      <SliderCovers Click={(audioIndex) => handleChangeAudio(audioIndex)} listPlay={playList} index={currentMusicIndex}/>
      <Musics handleClickNext={handleClickNext} handleClickPrev={handleClickPrev} playList={playList} currentMusicIndex={currentMusicIndex} />

    </div>

  );
}

export default Player;
