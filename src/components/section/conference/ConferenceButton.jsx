import React from "react";
import Button from "../../ui/button/Button";
import Grid from "../../ui/grid/Grid";

function ConferenceButton() {
  return (
    <Grid>
      <Button>
        <h4>Day 1</h4>
        <p>Feb 20, 2019</p>
      </Button>
      <Button>
        <h4>Day 2</h4>
        <p>Mar 29, 2020</p>
      </Button>
      <Button>
        <h4>Day 3</h4>
        <p>Dec 29, 2019</p>
      </Button>
    </Grid>
  );
}

export default ConferenceButton;
