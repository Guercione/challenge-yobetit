import React from "react";
import PropTypes from "prop-types";

import palette from "constants/palette";

import MUITextField from "@material-ui/core/TextField";
import makeStyles from "@material-ui/styles/makeStyles";

const styles = makeStyles({
  input: {
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: (props) => palette[props.color] || palette["primary"],
    },
  },
  color: {
    color: (props) => palette[props.color] || palette["primary"],
  },
});

const TextField = ({
  name,
  label,
  color,
  error,
  "data-testid": dataTestid,
  ...rest
}) => {
  const classes = styles({ color });
  return (
    <MUITextField
      id={"textfield-" + (name || label)}
      name={name || label}
      label={label}
      variant="outlined"
      size="small"
      color={color}
      style={{ margin: "10px 0" }}
      className={classes.input}
      InputLabelProps={{ className: classes.color }}
      inputProps={{
        className: classes.color,
        "data-testid": dataTestid,
        error: String(error),
      }}
      error={error}
      {...rest}
    />
  );
};

TextField.propTypes = {
  color: PropTypes.string,
  error: PropTypes.bool,
  name: PropTypes.string,
  label: PropTypes.string,
  "data-testid": PropTypes.string,
};

TextField.defaultProps = {
  name: "",
  label: "",
  color: "primary",
  error: false,
  "data-testid": "",
};

export default TextField;
