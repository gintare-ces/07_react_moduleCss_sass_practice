import React from "react";
import Grid from "../../../ui/grid/Grid";
import css from './ConferenceButton.module.css';

function ConferenceButton() {
  return (
    <Grid>
      <div className={css.redPill}>
        <h4 className={css.title}>title</h4>
        <p>Feb 20, 2019</p>
      </div>
      <div>
        <h4>Day 2</h4>
        <p>Mar 29, 2020</p>
      </div>
      <div>
        <h4>Day 3</h4>
        <p>Dec 29, 2019</p>
      </div>
    </Grid>
  );
}

export default ConferenceButton;
