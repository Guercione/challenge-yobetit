import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { userLoginAction } from "redux/actions/userAction";
import {
  countriesGetUniqueCountryAction,
  countriesSetCurrentCountryAction,
} from "redux/actions/countriesAction";

import palette from "constants/palette";

import TextField from "components/inputs/TextField";
import TextFieldAutocomplete from "components/inputs/TextFieldAutocomplete";

import Button from "components/inputs/Button";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import makeStyles from "@material-ui/styles/makeStyles";

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

function Form({
  currentCountry,
  loading,
  userLoginAction,
  countriesGetUniqueCountryAction,
}) {
  const classes = styles();
  const [name, setName] = React.useState("");
  const [inputError, setInputError] = React.useState(false);

  function handleLogin() {
    if (name && currentCountry.name) {
      setInputError(false);
      userLoginAction({ userName: name, country: currentCountry });
    } else {
      setInputError(true);
    }
  }

  function handleCountryInputSelect(el, item) {
    countriesSetCurrentCountryAction(item);
  }

  function handleCountryInputText(el) {
    const value = el.target.value;
    if (value) countriesGetUniqueCountryAction(value);
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
            error={inputError}
            name="login-name"
            label="Name"
            onChange={(el) => setName(el.target.value)}
          />
          <TextFieldAutocomplete
            fullWidth
            error={inputError}
            name="login-country"
            label="Country"
            loading={loading}
            options={[currentCountry]}
            optionKey="name"
            optionImageKey="flag"
            onInputSelectChange={handleCountryInputSelect}
            onInputTextChange={handleCountryInputText}
          />
        </Grid>

        <Grid item xs="auto">
          <Button onClick={handleLogin}>LOGIN</Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

Form.propTypes = {
  loading: PropTypes.bool,
  currentCountry: PropTypes.object.isRequired,
  userLoginAction: PropTypes.func.isRequired,
  countriesGetUniqueCountryAction: PropTypes.func.isRequired,
};

Form.defaultProps = {
  loading: false,
};

const mapStateToProps = (store) => ({
  currentCountry: store.countries.currentCountry,
  loading: store.countries.loading,
});

export default connect(mapStateToProps, {
  userLoginAction,
  countriesGetUniqueCountryAction,
})(Form);
