import React from 'react';
import SectionTitle from '../../title/SectionTitle';
import ConferenceButton from './filterItem/ConferenceButton';
import ConferenceCard from './ConferenceCard';
import css from './ConferenceSection.module.css';

function ConferenceSection() {
  return (
    <section className={css.section}>
      <SectionTitle title={'Schedule'} subtitle={'Conference schedule'} />
      <div className="control">
        <ConferenceButton title="Day 1" date="2020-02-02"/>
        <ConferenceCard />
      </div>
    </section>
  );
}

export default ConferenceSection;
