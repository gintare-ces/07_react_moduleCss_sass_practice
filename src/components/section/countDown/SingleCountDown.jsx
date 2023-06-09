import React from 'react';
import css from './SingleCountDown.module.css';

function SingleCountDown({circle, value, time}) {
  // i value paragraph paduoti reiksme is props
  // value ir h3 elementams uzdeti klase pagal props
  // cirkle elementui uzdeti klase pagal props
  // let colorsClass = '';
  // switch(props.circle) {
  //     case 'violet':
  //         colorsClass = css.violet;
  //         break;
  //     case 'sky':
  //         colorsClass = css.sky;
  //         break;
  //     case 'blue':
  //         colorsClass = css.blue;
  //         break;
  //     case 'green':
  //         colorsClass = css.green;
  // }
  return (
    <div className={`${css.circle} ${css[circle]}`}>
      <p className={css.value}>{value}</p>
      <h3 className={css.time}>{time}</h3>
    </div>
  );
}

export default SingleCountDown;
