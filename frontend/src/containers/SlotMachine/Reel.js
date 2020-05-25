import React from "react";
import PropTypes from "prop-types";

import If from "components/If";
import Paper from "@material-ui/core/Paper";
import makeStyles from "@material-ui/styles/makeStyles";

const styles = makeStyles({
  card: {
    width: 90,
    height: 90,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "10px 0",
    "& img": {
      height: 65,
      width: 65,
    },
  },
});

function Reel({ spinning, fruit }) {
  const classes = styles();

  return (
    <Paper className={classes.card}>
      <If condition={spinning}>
        <img alt="Reel" src="images/fruits/animated-reel.gif" />
      </If>
      <If condition={!spinning}>
        <img alt={fruit} src={`images/fruits/${fruit}.svg`} />
      </If>
    </Paper>
  );
}

Reel.propTypes = {
  spinning: PropTypes.bool,
  fruit: PropTypes.string,
};

Reel.defaultProps = {
  spinning: false,
  fruit: "cherry",
};

export default Reel;
