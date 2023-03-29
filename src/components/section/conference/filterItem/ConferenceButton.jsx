import React, { useState } from "react";
import css from './ConferenceButton.module.css';

function ConferenceButton({ title, date }) {
  const [isActive, setIsActive] = useState(false);

  const activeClass = isActive ? css.active : '';
  return (
    
      <div 
        onClick={() => {
          setIsActive(!isActive)
        }} 
        className={[css.redPill, activeClass].join(' ')} 
        role="button">
        <h4 className={css.title}>{title}</h4>
        <p>{date}</p>
      </div>
     
    
  );
}

export default ConferenceButton;
