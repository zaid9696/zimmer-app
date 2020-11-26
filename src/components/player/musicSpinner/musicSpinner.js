
import React from 'react';

import './musicSpinner.styles.scss';


const MusicSpinner = ({playList, musicIndex}) => {

      let checkIndex;

      musicIndex === null ? checkIndex = 0 : checkIndex = musicIndex;
      const playerCover = playList.filter((item) => item.id === checkIndex);
      console.log(playerCover);

    return (
      <div className="musicSpinner">
          <div className="musicSpinner__content">
              <img src={playerCover[0].cover} />
              <h3>{playerCover[0].name}</h3>
          </div>
      </div>
    );
};



export default MusicSpinner;
