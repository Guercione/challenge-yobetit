import React from "react";

import { connect } from "react-redux";
import {
  countriesSetCurrentCountryAction,
  countriesGetListCountriesAction,
} from "redux/actions/countriesAction";

import palette from "constants/palette";
import { getFavoriteCountry } from "utils/localStorage";

import Loading from "components/Loading";
import If from "components/If";
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
    "& img": { border: "1px solid #f1f1f1", width: 30 },
  },
  cardButton: {
    padding: 0,
  },
});

function FavoriteCountries({
  loading,
  userCountry,
  favoriteCountries,
  countriesSetCurrentCountryAction,
  countriesGetListCountriesAction,
}) {
  const classes = styles();

  React.useEffect(() => {
    const list = getFavoriteCountry();

    if (list && list.length) {
      countriesGetListCountriesAction(list);
    }
  }, []);

  return (
    <Grid container direction="column">
      <Typography variant="h5" color="secondary">
        Favorite Countries
      </Typography>
      <Divider className={classes.divider} />

      <If condition={loading}>
        <Grid>
          <Loading color="secondary" />
        </Grid>
      </If>

      <If condition={!loading}>
        <Grid container>
          {[userCountry, ...favoriteCountries].map((country) => (
            <Grid key={country.alpha3Code} item xs={3} sm={2} md={3}>
              <IconButton
                classes={{ root: classes.cardButton }}
                onClick={() => countriesSetCurrentCountryAction(country)}
              >
                <Paper className={classes.card}>
                  <img alt={country.name + " Flag"} src={country.flag} />
                  <Typography variant="subtitle1" align="center">
                    {country.alpha3Code}
                  </Typography>
                </Paper>
              </IconButton>
            </Grid>
          ))}
        </Grid>
      </If>
    </Grid>
  );
}

const mapStateToProps = (store) => ({
  userCountry: store.user.userCountry,
  favoriteCountries: store.countries.favoriteCountries,
  loading: store.countries.loading,
});

export default connect(mapStateToProps, {
  countriesSetCurrentCountryAction,
  countriesGetListCountriesAction,
})(FavoriteCountries);
