
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
  {name: 'Hans Zimmer - Interstellar - Main Theme', src: interstellarAudio, cover: interstellarCover},
  {name: 'Hans Zimmer - Time', src: timeAudio, cover: timeCover},
  {name: 'Hans Zimmer - Why do we fall', src: whyAudio, cover: whyCover},
  {name: 'Hans Zimmer - Now we are free', src: gladiatorAudio, cover: gladiatorCover},
  {name: 'Hans Zimmer - Moutains', src: moutainsAudio, cover: moutainsCover},
  {name: "Hans Zimmer - Pirates of the Caribbean: Dead Man's Chest", src: piratesAudio, cover: piratesCover},
  {name: 'Hans Zimmer - Flight', src: supermanAudio, cover: supermanCover},
  {name: 'Hans Zimmer - The Dark Knight Main Theme', src: batmanAudio, cover: batmanCover},
  {name: 'Hans Zimmer - Lost but won', src: rushAudio, cover: rushCover},
  {name: 'Hans Zimmer - Chevaliers de Sangreal', src: codeAudio,cover: codeCover},
];

const Player = () => {

  const [currentMusicIndex, setCurrentMusicIndex] = useState(0);

  const handleClickPrev = () => {

    setCurrentMusicIndex((prevState) => prevState === 0 ? playList.length - 1 : prevState - 1);
  }

  const handleClickNext = () => {

    setCurrentMusicIndex((prevState) => prevState < playList.length - 1 ? prevState + 1 : 0 );
  }

  // const handleChangeAudio = () => {
  //
  //   setCurrentMusicIndex(3)
  //
  // }
  console.log(currentMusicIndex);

  return (

    <div>

      <SliderCovers listPlay={playList} />
      <Musics handleClickNext={handleClickNext} handleClickPrev={handleClickPrev} playList={playList} currentMusicIndex={currentMusicIndex} />

    </div>

  );
}

export default Player;
