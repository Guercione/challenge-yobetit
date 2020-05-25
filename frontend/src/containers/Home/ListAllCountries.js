import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import {
  countriesGetAllCountriesAction,
  countriesSetCurrentCountryAction,
} from "redux/actions/countriesAction";

import palette from "constants/palette";

import ListCountries from "./ListCountries";
import If from "components/If";
import Loading from "components/Loading";
import TextField from "components/inputs/TextField";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import Hidden from "@material-ui/core/Hidden";
import makeStyles from "@material-ui/styles/makeStyles";
import InfoIcon from "@material-ui/icons/Info";

const styles = makeStyles({
  content: { minHeight: 300 },
  divider: {
    backgroundColor: palette["secondary"],
    height: 2,
    margin: "5px 0 15px 0",
  },
});

function ListAllCountries({
  loading,
  countries,
  countriesGetAllCountriesAction,
  countriesSetCurrentCountryAction,
}) {
  const classes = styles();
  const [search, setSearch] = React.useState("");
  const [filteredCountries, setFilteredCountries] = React.useState([]);

  React.useEffect(() => {
    countriesGetAllCountriesAction();
  }, []);

  function handleSearch(e) {
    const { value } = e.target;

    if (value && value.length >= 2) {
      setFilteredCountries(
        countries.filter(
          (country) =>
            country.name.toLowerCase().includes(value.toLowerCase()) ||
            country.alpha3Code.toLowerCase().includes(value.toLowerCase())
        )
      );
    }

    setSearch(value);
  }

  return (
    <Grid container direction="column" className={classes.content}>
      <Typography variant="h5" color="secondary">
        All Countries List
      </Typography>
      <Divider className={classes.divider} />

      <Grid container alignItems="center">
        <Typography variant="subtitle1" color="secondary">
          Search a country
        </Typography>
        <Hidden mdUp>
          <Typography variant="body2" color="secondary">
            (type at least 2 letters)
          </Typography>
        </Hidden>
        <Hidden smDown>
          <Tooltip title="Type at least 2 letters">
            <InfoIcon color="secondary" />
          </Tooltip>
        </Hidden>
      </Grid>

      <TextField
        name="listcountries-countryname"
        color="secondary"
        label="Country Name"
        value={search}
        onChange={handleSearch}
      />

      <Grid container>
        <If condition={Boolean(search && search.length < 2)}>
          <Typography variant="body2" color="secondary">
            Type at least 2 letters
          </Typography>
        </If>

        <If condition={!countries.length}>
          <Typography variant="body2" color="secondary">
            No countries found
          </Typography>
        </If>

        <If condition={loading}>
          <Grid>
            <Loading color="secondary" />
          </Grid>
        </If>

        <If condition={!loading && search.length >= 2}>
          <ListCountries
            countries={filteredCountries}
            onClick={countriesSetCurrentCountryAction}
          />
        </If>
      </Grid>
    </Grid>
  );
}

ListAllCountries.propTypes = {
  loading: PropTypes.bool,
  countries: PropTypes.array.isRequired,
  countriesGetAllCountriesAction: PropTypes.func.isRequired,
  countriesSetCurrentCountryAction: PropTypes.func.isRequired,
};

ListAllCountries.defaultProps = {
  loading: false,
};

const mapStateToProps = (store) => ({
  loading: store.countries.loading,
  countries: store.countries.countriesList,
});

export default connect(mapStateToProps, {
  countriesGetAllCountriesAction,
  countriesSetCurrentCountryAction,
})(ListAllCountries);
