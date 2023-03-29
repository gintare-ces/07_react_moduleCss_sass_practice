import React from 'react'
import Icon from '../../ui/icon/Icon'
import css from './ConferenceSection.module.css'

function ConferenceCard() {
  return (
    <div className={css.conferenceCard}>
        <div >
            <Icon name='clock-o'/>
            <p>10:30 - 12:30</p>
            <Icon name='map-marker'/>
            <p>Room 2</p>
        </div>

    </div>
  )
}

export default ConferenceCard