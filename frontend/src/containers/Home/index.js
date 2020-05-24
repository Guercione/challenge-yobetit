import React from "react";

import CountryInfo from "./CountryInfo";
import FavoriteCountries from "./FavoriteCountries";
import ListCountries from "./ListAllCountries";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/styles/makeStyles";

const styles = makeStyles({
  cardSpace: { margin: 15 },
});

function Home() {
  const classes = styles();

  return (
    <Grid container justify="space-between">
      <Grid item xs={12} md="auto" className={classes.cardSpace}>
        <CountryInfo />
      </Grid>
      <Grid item xs={12} md={5} className={classes.cardSpace}>
        <FavoriteCountries />
      </Grid>
      <Grid item xs={12} className={classes.cardSpace}>
        <ListCountries />
      </Grid>
    </Grid>
  );
}

export default Home;
