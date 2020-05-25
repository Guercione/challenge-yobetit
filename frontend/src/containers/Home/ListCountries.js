import React from "react";
import PropTypes from "prop-types";

import If from "components/If";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import makeStyles from "@material-ui/styles/makeStyles";

const styles = makeStyles({
  card: {
    width: 70,
    height: 50,
    paddingTop: 10,
    margin: "0 10px 10px 0",
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

function ListCountries({ countries, onClick }) {
  const classes = styles();

  return (
    <If condition={Boolean(countries && countries.length)}>
      <Grid container>
        {countries.map((country) => (
          <Grid key={country.alpha3Code} item xs={3} sm={2} md="auto">
            <IconButton
              classes={{ root: classes.cardButton }}
              onClick={() => onClick(country)}
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
  );
}

ListCountries.propTypes = {
  countries: PropTypes.array,
  onClick: PropTypes.func,
};

ListCountries.defaultProps = {
  countries: [],
  onClick: () => {},
};

export default ListCountries;
