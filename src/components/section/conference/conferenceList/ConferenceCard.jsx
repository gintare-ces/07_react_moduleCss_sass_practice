
import React from 'react';
import CItem from './CItem';
import css from './ConferenceCard.module.css';

function ConferenceCard({ list }) {
  // const sampleArr = [1, 2, 3, 4]




  return (
    <div className={css.wrap}>
      {list.legth === 0 && <h2>Nera eventu</h2>}
      
      {/* map over sampleArr and generate items */}
      
      {list.map((cObj) => (
        <CItem key={cObj.title} item={cObj} />

      ))}
       {/* <CItem />
       <CItem /> */}
    </div>
  )
}

export default ConferenceCard