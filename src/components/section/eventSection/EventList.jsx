import React from 'react'
import Grid from '../../ui/grid/Grid'
import SingleEvent from './SingleEvent'

function EventList() {
  return (
    <Grid ul>
        <SingleEvent />
        <SingleEvent />
        <SingleEvent />
    </Grid>
  )
}

export default EventList