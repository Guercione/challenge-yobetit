import React from "react";

import data from "./CountryInfoFakeData";
import palette from "constants/palette";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import StarIcon from "@material-ui/icons/Star";
import makeStyles from "@material-ui/styles/makeStyles";

const styles = makeStyles({
  content: { padding: 15 },
  flag: { marginBottom: 15 },
  active: { color: palette["highlight"] },
});

function Home() {
  const classes = styles();

  return (
    <Paper className={classes.content}>
      <Grid container direction="column">
        <Grid
          container
          direction="column"
          alignContent="center"
          className={classes.flag}
        >
          <img alt={data.name + " Flag"} src={data.flag} width="100px" />
          <Typography variant="subtitle1" align="center">
            {data.name}
          </Typography>
        </Grid>

        <Grid container alignItems="center">
          <Typography variant="subtitle1">Alpha Code:</Typography>
          <Typography variant="body1">
            {`${data.alpha2Code}/${data.alpha3Code}`}
          </Typography>
        </Grid>

        <Grid container alignItems="center">
          <Typography variant="subtitle1">Capital:</Typography>
          <Typography variant="body1">{data.capital}</Typography>
        </Grid>

        <Grid container alignItems="center">
          <Typography variant="subtitle1">Region:</Typography>
          <Typography variant="body1">{data.region}</Typography>
        </Grid>

        <Grid container alignItems="center">
          <Typography variant="subtitle1">Sub Region:</Typography>
          <Typography variant="body1">{data.subregion}</Typography>
        </Grid>

        <Grid container alignItems="center">
          <Typography variant="subtitle1">Population:</Typography>
          <Typography variant="body1">
            {new Intl.NumberFormat("en-US", {
              notation: "compact",
              compactDisplay: "long",
            }).format(data.population)}
          </Typography>
        </Grid>
        <Grid container alignItems="center">
          <Typography variant="subtitle1">Timezones:</Typography>
          <Typography variant="body1">{data.timezones.join(" | ")}</Typography>
        </Grid>

        <Grid container alignItems="center">
          <Typography variant="subtitle1">Demonym:</Typography>
          <Typography variant="body1">{data.demonym}</Typography>
        </Grid>

        <Grid container alignItems="center">
          <Typography variant="subtitle1">Currencies:</Typography>
          <Typography variant="body1">
            {data.currencies.map((item) => item.code).join(" | ")}
          </Typography>
        </Grid>

        <Grid container alignItems="center">
          <Typography variant="subtitle1">Languages:</Typography>
          <Typography variant="body1">
            {data.languages.map((item) => item.name).join(" | ")}
          </Typography>
        </Grid>

        <Grid container justify="flex-end">
          <Tooltip title="Add to favorite">
            <IconButton onClick={() => console.log("Add favorite")}>
              <StarIcon className={1 === 1 ? classes.active : ""} />
            </IconButton>
          </Tooltip>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Home;
