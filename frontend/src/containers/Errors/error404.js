import React from "react";

import Grid from "@material-ui/core/Grid";
import Button from "components/inputs/Button";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/styles/makeStyles";
import ErrorIcon from "@material-ui/icons/Error";

const styles = makeStyles({
  content: { height: "100vh" },
  errorIcon: { fontSize: 64 },
  button: { marginTop: 15 },
});

const error404 = () => {
  const classes = styles();

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
        404
      </Typography>
      <Typography variant="h2" align="right" color="secondary">
        PAGE NOT FOUND
      </Typography>
      <Typography variant="h5" align="right" color="secondary">
        Sorry, but what you are looking for it's not here :(
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
};

export default error404;
