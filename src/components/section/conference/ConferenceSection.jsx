import React from 'react';
import SectionTitle from '../../title/SectionTitle';
import ConferenceButton from './ConferenceButton';
import ConferenceCard from './ConferenceCard';
import css from './ConferenceSection.module.css';

function ConferenceSection() {
  return (
    <section className={css.section}>
      <SectionTitle title={'Schedule'} subtitle={'Conference schedule'} />
      <div className="container">
        <ConferenceButton />
        <ConferenceCard />
      </div>
    </section>
  );
}

export default ConferenceSection;
