import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import {
  countriesRemoveFavoriteCountryAction,
  countriesSetFavoriteCountryAction,
} from "redux/actions/countriesAction";

import palette from "constants/palette";

import If from "components/If";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import StarIcon from "@material-ui/icons/Star";
import makeStyles from "@material-ui/styles/makeStyles";

const styles = makeStyles({
  content: { padding: 15, width: 440 },
  flag: {
    marginBottom: 15,
    "& img": { border: "1px solid #f1f1f1", width: 100 },
  },
  active: { color: palette["highlight"] },
});

function CountryInfo({
  isFavorite,
  userCountry,
  currentCountry,
  countriesRemoveFavoriteCountryAction,
  countriesSetFavoriteCountryAction,
}) {
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
          <img alt={currentCountry.name + " Flag"} src={currentCountry.flag} />
          <Typography variant="subtitle1" align="center">
            {currentCountry.name}
          </Typography>
        </Grid>

        <Grid container alignItems="center">
          <Typography variant="subtitle1">Alpha Code:</Typography>
          <Typography variant="body1">
            {`${currentCountry.alpha2Code}/${currentCountry.alpha3Code}`}
          </Typography>
        </Grid>

        <Grid container alignItems="center">
          <Typography variant="subtitle1">Capital:</Typography>
          <Typography variant="body1">{currentCountry.capital}</Typography>
        </Grid>

        <Grid container alignItems="center">
          <Typography variant="subtitle1">Region:</Typography>
          <Typography variant="body1">{currentCountry.region}</Typography>
        </Grid>

        <Grid container alignItems="center">
          <Typography variant="subtitle1">Sub Region:</Typography>
          <Typography variant="body1">{currentCountry.subregion}</Typography>
        </Grid>

        <Grid container alignItems="center">
          <Typography variant="subtitle1">Population:</Typography>
          <Typography variant="body1">
            {new Intl.NumberFormat("en-US", {
              notation: "compact",
              compactDisplay: "long",
            }).format(currentCountry.population)}
          </Typography>
        </Grid>
        <Grid container alignItems="center">
          <Typography variant="subtitle1">Timezones:</Typography>
          <Typography variant="body1">
            {currentCountry.timezones.join(" | ")}
          </Typography>
        </Grid>

        <Grid container alignItems="center">
          <Typography variant="subtitle1">Demonym:</Typography>
          <Typography variant="body1">{currentCountry.demonym}</Typography>
        </Grid>

        <Grid container alignItems="center">
          <Typography variant="subtitle1">Currencies:</Typography>
          <Typography variant="body1">
            {currentCountry.currencies.map((item) => item.code).join(" | ")}
          </Typography>
        </Grid>

        <Grid container alignItems="center">
          <Typography variant="subtitle1">Languages:</Typography>
          <Typography variant="body1">
            {currentCountry.languages.map((item) => item.name).join(" | ")}
          </Typography>
        </Grid>
        <If condition={userCountry.name !== currentCountry.name}>
          <Grid container justify="flex-end">
            <Tooltip title="Add to favorite">
              <IconButton
                onClick={() =>
                  isFavorite
                    ? countriesRemoveFavoriteCountryAction()
                    : countriesSetFavoriteCountryAction()
                }
              >
                <StarIcon className={isFavorite ? classes.active : ""} />
              </IconButton>
            </Tooltip>
          </Grid>
        </If>
      </Grid>
    </Paper>
  );
}
const mapStateToProps = (store) => ({
  currentCountry: store.countries.currentCountry,
  isFavorite: store.countries.favoriteCountries.some(
    (country) => country.name === store.countries.currentCountry.name
  ),
  userCountry: store.user.userCountry,
});

export default connect(mapStateToProps, {
  countriesRemoveFavoriteCountryAction,
  countriesSetFavoriteCountryAction,
})(CountryInfo);
