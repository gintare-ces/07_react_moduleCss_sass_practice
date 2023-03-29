import React from 'react'
import SectionTitle from '../../title/SectionTitle'
import ConferenceButton from './ConferenceButton'
import ConferenceCard from './ConferenceCard'


function ConferenceSection() {
  return (
    <section>
        <div className="container">
            <SectionTitle title={'Schedule'} subtitle={'Conference schedule'}/>
            <ConferenceButton />
            <ConferenceCard />
        </div>
    </section>
  )
}

export default ConferenceSection