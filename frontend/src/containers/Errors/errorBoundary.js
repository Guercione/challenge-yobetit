import React from "react";
import PropTypes from "prop-types";

import Grid from "@material-ui/core/Grid";
import Button from "components/inputs/Button";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import ErrorIcon from "@material-ui/icons/Error";

const styles = {
  content: { height: "100vh" },
  errorIcon: { fontSize: 64 },
  button: { marginTop: 15 },
};

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo);
  }

  render() {
    const { hasError } = this.state;
    const { classes, children } = this.props;

    if (hasError) {
      return (
        <Grid
          container
          direction="column"
          alignItems="flex-end"
          justify="center"
          className={classes.content}
        >
          <ErrorIcon color="secondary" className={classes.errorIcon} />
          <Typography variant="h1" color="secondary">
            OPS!
          </Typography>
          <Typography variant="h5" align="right" color="secondary">
            Something strange happened
          </Typography>
          <Button
            href="/"
            target="_self"
            color="secondary"
            className={classes.button}
          >
            Back
          </Button>
        </Grid>
      );
    }

    return children;
  }
}

ErrorBoundary.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired,
};

export default withStyles(styles)(ErrorBoundary);
