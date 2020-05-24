import React from "react";

import data from "./ListCountriesFakeData";
import palette from "constants/palette";

import If from "components/If";
import TextField from "components/inputs/TextField";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
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
  const [search, setSearch] = React.useState("");
  const [countries, setCountries] = React.useState(data);

  function handleSearch(e) {
    const { value } = e.target;

    if (value.length >= 2) {
      setCountries(
        data.filter(
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
        <If condition={search.length < 2}>
          <Typography variant="body2" color="secondary">
            Type at least 2 letters
          </Typography>
        </If>

        <If condition={!countries.length}>
          <Typography variant="body2" color="secondary">
            No countries found
          </Typography>
        </If>

        <If condition={search.length >= 2}>
          {countries.map((country) => (
            <Grid key={country.alpha3Code} item xs={3} sm={2} md={1}>
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
        </If>
      </Grid>
    </Grid>
  );
}

export default Home;
