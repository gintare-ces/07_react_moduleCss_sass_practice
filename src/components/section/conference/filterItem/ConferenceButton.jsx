import React from "react";
import css from './ConferenceButton.module.css';

function ConferenceButton() {
  return (
    
      <div className={css.redPill} role="button">
        <h4 className={css.title}>title</h4>
        <p>Feb 20, 2019</p>
      </div>
     
    
  );
}

export default ConferenceButton;
