import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";

import { Route } from "react-router-dom";
import NavBar from "containers/NavBar";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/styles/makeStyles";

const styles = makeStyles({
  content: { paddingTop: 95 },
});

const Login = React.lazy(() => import("containers/Login"));

const PrivateRoute = ({ userName, userCountry, path, ...rest }) => {
  const classes = styles();

  if (userName && userCountry.name) {
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

PrivateRoute.propTypes = {
  path: PropTypes.string,
  userName: PropTypes.string,
  userCountry: PropTypes.object,
};

PrivateRoute.defaultProps = {
  path: "/",
  userName: "",
  userCountry: {},
};

export default connect(
  ({ user }) => ({ userName: user.userName, userCountry: user.userCountry }),
  {}
)(PrivateRoute);
