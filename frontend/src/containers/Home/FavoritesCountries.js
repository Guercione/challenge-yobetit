import React from "react";

import data from "./FavoritesCountriesFakeData";
import palette from "constants/palette";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Divider from "@material-ui/core/Divider";
import makeStyles from "@material-ui/styles/makeStyles";

const styles = makeStyles({
  divider: {
    backgroundColor: palette["secondary"],
    height: 2,
    margin: "5px 0 15px 0",
  },
  card: {
    width: 70,
    height: 50,
    paddingTop: 10,
    marginBottom: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardButton: {
    padding: 0,
  },
});

function Home() {
  const classes = styles();

  return (
    <Grid container direction="column">
      <Typography variant="h5" color="secondary">
        Favorites Countries
      </Typography>
      <Divider className={classes.divider} />
      <Grid container>
        {data.map((country) => (
          <Grid key={country.alpha3Code} item xs={3} sm={2} md={3}>
            <IconButton classes={{ root: classes.cardButton }}>
              <Paper className={classes.card}>
                <img
                  alt={country.name + " Flag"}
                  src={country.flag}
                  width="30px"
                />
                <Typography variant="subtitle1" align="center">
                  {country.alpha3Code}
                </Typography>
              </Paper>
            </IconButton>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

export default Home;
