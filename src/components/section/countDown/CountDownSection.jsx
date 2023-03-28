import React, { useEffect, useState } from 'react'
import Grid from '../../ui/grid/Grid';
import css from './CountDownSection.module.css'
import SingleCountDown from './SingleCountDown';

function CountDownSection() {

    const [now, setNow] = useState(new Date())

    // Todo: padaryti kad laikas butu skaiciuojamas iki kazkurios datos

    const day = now.getDay()
    const hour = now.getHours()
    const minutes = now.getMinutes()
    const secs = now.getSeconds().toString().padStart(2, 0)
    
    useEffect(() => {
      const timer1 = setInterval(() => {
        setNow(new Date())
      }, 1000)
      return (() => {
        // veiksmai atliekami sunaikinant komponenta
        clearInterval(timer1)
      })
    }, [])
    

  return (
    <section className={`container ${css.section}`}>
        <h2 className={css.title}>
            
            Count down every second to <span>Event</span></h2>
        <Grid cols={4}>
            <SingleCountDown time='Days' value={day} circle={'violet'} />
            <SingleCountDown time='Hours' value={hour} circle={'sky'} />
            <SingleCountDown time='Minutes' value={minutes} circle={'blue'} />
            <SingleCountDown time='Seconds' value={secs} circle={'green'} />
        </Grid>
    </section>
  )
}

export default CountDownSection