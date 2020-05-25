import React from "react";

import Machine from "./Machine";
import Rules from "./Rules";
import Grid from "@material-ui/core/Grid";

function SlotMachine() {
  return (
    <Grid container justify="space-between">
      <Grid item xs={12} md={6}>
        <Machine />
      </Grid>
      <Grid item xs={12} md={4}>
        <Rules />
      </Grid>
    </Grid>
  );
}

export default SlotMachine;
