
import React from 'react';

import './musicSpinner.styles.scss';


const MusicSpinner = ({playList, musicIndex, isPlaying}) => {

      let checkIndex;

      musicIndex === null ? checkIndex = 0 : checkIndex = musicIndex;
      const playerCover = playList.filter((item) => item.id === checkIndex);
      console.log(playerCover);

    return (
      <div className="musicSpinner">
        <span className="musicSpinner__line musicSpinner__line-left"></span>
        <span className="musicSpinner__line musicSpinner__line-right"></span>
          <div className="musicSpinner__content">
              <img className={isPlaying ? 'musicSpinner__spinnerPlaying' : 'musicSpinner__spinnerPause'} src={playerCover[0].cover} alt="Cover Spinner" />
              <h3 className={!isPlaying ? 'musicSpinner__title-pause' : ''}>{playerCover[0].name}</h3>
          </div>
          <span className="musicSpinner__line musicSpinner__line-tight musicSpinner__line-tight-left"></span>
          <span className="musicSpinner__line musicSpinner__line-tight musicSpinner__line-tight-right"></span>

      </div>
    );
};



export default MusicSpinner;
