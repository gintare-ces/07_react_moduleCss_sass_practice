import React from 'react';
import Icon from '../../../ui/icon/Icon';
// import Icon from '../../../ui/icon/Icon';
import css from './CItem.module.css';

function CItem({item}) {
    const { title, room, speaker, img, time } = item
  return (
    
      <div className={css.flex}>
        
        <div className={css.info}>
          <img src={img} alt="img" />
          <p className={css.dataRow}>
            <Icon name="clock-o"/> <span>{time}</span>
          </p>
          <p className={css.dataRow}>
            <Icon name="map-marker" /> <span>{room}</span>
          </p>
          
        </div>
        <div className={css.about}>
            <h2>{title}</h2>
            <p>by {speaker}</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, odit!</p>
        </div>
      </div>
    
  );
}

export default CItem;
