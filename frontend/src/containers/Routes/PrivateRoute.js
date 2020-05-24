import React from "react";
import { Route, Redirect } from "react-router-dom";

import NavBar from "containers/NavBar";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/styles/makeStyles";

const styles = makeStyles({
  content: { paddingTop: 95 },
});

const Login = React.lazy(() => import("containers/Login"));

const PrivateRoute = ({ path, ...rest }) => {
  const classes = styles();

  if (1 === 2) {
    return (
      <React.Fragment>
        <NavBar />
        <Grid className={classes.content}>
          <Route path={path} {...rest} />
        </Grid>
      </React.Fragment>
    );
  }

  return <Route exact path={path || "/"} component={Login} />;
};

export default PrivateRoute;
