import React from 'react';
import SectionTitle from '../../title/SectionTitle';
import ConferenceButton from './filterItem/ConferenceButton';
// import ConferenceCard from './ConferenceCard';
import css from './ConferenceSection.module.css';
import Grid from '../../ui/grid/Grid';

function ConferenceSection() {
  return (
    <section className={css.section}>
      <div className="container">
        <SectionTitle title={'Schedule'} subtitle={'Conference schedule'} />
        <Grid className={css.control}>
          <ConferenceButton title="Day 1" date="2020-02-02" />
          <ConferenceButton title="Day 2" date="2020-02-03" />
          <ConferenceButton title="Day 3" date="2020-02-04" />
          {/* <ConferenceCard /> */}
        </Grid>
      </div>
    </section>
  );
}

export default ConferenceSection;
