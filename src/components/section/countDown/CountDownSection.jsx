import React from 'react'
import Grid from '../../ui/grid/Grid';
import css from './CountDownSection.module.css'
import SingleCountDown from './SingleCountDown';

function CountDownSection() {
  return (
    <section className={`container ${css.section}`}>
        <h2 className={css.title}>Count down every second to <span>Event</span></h2>
        <Grid cols={4}>
            <SingleCountDown />
            <SingleCountDown />
            <SingleCountDown />
            <SingleCountDown />
        </Grid>
    </section>
  )
}

export default CountDownSection