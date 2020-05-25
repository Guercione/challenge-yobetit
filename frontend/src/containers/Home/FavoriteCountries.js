import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import {
  countriesSetCurrentCountryAction,
  countriesGetListCountriesAction,
  countriesClearFavoriteCountriesAction,
} from "redux/actions/countriesAction";

import palette from "constants/palette";
import { getFavoriteCountry } from "utils/localStorage";

import ListCountries from "./ListCountries";
import Loading from "components/Loading";
import If from "components/If";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import makeStyles from "@material-ui/styles/makeStyles";

const styles = makeStyles({
  divider: {
    backgroundColor: palette["secondary"],
    height: 2,
    margin: "5px 0 15px 0",
  },
});

function FavoriteCountries({
  loading,
  userCountry,
  favoriteCountries,
  countriesSetCurrentCountryAction,
  countriesGetListCountriesAction,
  countriesClearFavoriteCountriesAction,
}) {
  const classes = styles();

  React.useEffect(() => {
    const list = getFavoriteCountry();

    if (list && list.length) {
      countriesGetListCountriesAction(list);
    } else {
      countriesClearFavoriteCountriesAction();
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
        <ListCountries
          countries={[userCountry, ...favoriteCountries]}
          onClick={countriesSetCurrentCountryAction}
        />
      </If>
    </Grid>
  );
}

FavoriteCountries.propTypes = {
  loading: PropTypes.bool,
  favoriteCountries: PropTypes.array,
  userCountry: PropTypes.object.isRequired,
  countriesGetListCountriesAction: PropTypes.func.isRequired,
  countriesSetCurrentCountryAction: PropTypes.func.isRequired,
  countriesClearFavoriteCountriesAction: PropTypes.func.isRequired,
};

FavoriteCountries.defaultProps = {
  loading: false,
  favoriteCountries: [],
};

const mapStateToProps = (store) => ({
  userCountry: store.user.userCountry,
  favoriteCountries: store.countries.favoriteCountries,
  loading: store.countries.loading,
});

export default connect(mapStateToProps, {
  countriesSetCurrentCountryAction,
  countriesGetListCountriesAction,
  countriesClearFavoriteCountriesAction,
})(FavoriteCountries);
