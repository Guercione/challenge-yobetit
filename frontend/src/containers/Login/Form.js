import React from "react";
import PropTypes from "prop-types";
import palette from "constants/palette";

import TextField from "components/inputs/TextField";
import TextFieldAutocomplete from "components/inputs/TextFieldAutocomplete";

import Button from "components/inputs/Button";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import makeStyles from "@material-ui/styles/makeStyles";

const options = [
  {
    name: "Brazil",
    flag: "https://restcountries.eu/data/bra.svg",
  },
  {
    name: "Poland",
    flag: "https://restcountries.eu/data/pol.svg",
  },
];

const styles = makeStyles({
  content: {
    height: "100vh",
  },
  panel: {
    padding: "30px",
    backgroundColor: palette["secondary"],
    borderRadius: 10,
    width: "100%",
    maxWidth: 300,
    height: "100%",
    maxHeight: 350,
  },
  avatar: {
    height: 85,
    width: 82,
  },
});

function Home() {
  const classes = styles();
  const [name, setName] = React.useState("");
  const [country, setCountry] = React.useState({});
  const [error, setError] = React.useState(false);

  function handleLogin() {
    if (name && country.name) return setError(false);
    return setError(true);
  }

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.content}
    >
      <Grid
        container
        direction="column"
        justify="space-around"
        alignItems="center"
        className={classes.panel}
      >
        <Grid item xs="auto">
          <Avatar
            alt="Avatar Image"
            src="images/avatar.png"
            className={classes.avatar}
          ></Avatar>
        </Grid>

        <Grid item xs="auto" container justify="center">
          <TextField
            fullWidth
            error={error}
            name="login-name"
            label="Name"
            onChange={(el) => setName(el.target.value)}
          />
          <TextFieldAutocomplete
            fullWidth
            error={error}
            name="login-country"
            label="Country"
            options={options}
            optionKey="name"
            optionImageKey="flag"
            onChange={(el, item) => setCountry(item || {})}
          />
        </Grid>

        <Grid item xs="auto">
          <Button onClick={handleLogin}>LOGIN</Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
