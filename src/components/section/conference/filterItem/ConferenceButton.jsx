// import React, { useState } from "react";
import css from './ConferenceButton.module.css';

// istrinti state
// mygtuko paspaudimu iskviesti gauta funkcija gauta is props fn
// activeClass priklausys 
function ConferenceButton({ title, date, isActive, onToggle }) {
  // const [isActive, setIsActive] = useState(false);

  const activeClass = isActive ? css.active : '';
  return (
    
      <div 
        onClick={onToggle} 
        className={[css.redPill, activeClass].join(' ')} 
        role="button">
        <h4 className={css.title}>{title}</h4>
        <p>{date}</p>
      </div>
     
    
  );
}

export default ConferenceButton;
