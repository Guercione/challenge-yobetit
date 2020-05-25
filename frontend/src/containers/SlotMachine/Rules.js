import React from "react";

import { prizes } from "constants/reel";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/styles/makeStyles";

const styles = makeStyles({
  content: {
    width: "100%",
    padding: "15px 0",
    margin: "15px 0",
  },
  prize: {
    width: "60%",
  },
});

function Machine() {
  const classes = styles();

  return (
    <Paper className={classes.content}>
      <Grid container direction="column" alignContent="center">
        <Typography align="center" variant="h6">
          PRIZES
        </Typography>
        {prizes.map((prize) => (
          <Grid
            key={prize.fruit + prize.value}
            container
            justify="space-between"
            alignItems="center"
            className={classes.prize}
          >
            <Typography variant="h6">{prize.prize}</Typography>
            <Grid>
              {prize.reel.map((fruit, key) => (
                <img
                  key={fruit + key}
                  alt={fruit}
                  src={`images/fruits/${fruit}.svg`}
                  width="30px"
                />
              ))}
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
}

export default Machine;
