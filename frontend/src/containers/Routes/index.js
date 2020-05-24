import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import Loading from "components/Loading";
import SnackBar from "components/SnackBar";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

const ComponentLoading = () => (
  <Grid
    container
    direction="row"
    justify="center"
    alignItems="center"
    style={{ height: "100vh", width: "100vw" }}
  >
    <Loading height="80px" width="80px" />
  </Grid>
);

const Home = React.lazy(() => import("containers/Home"));
const Login = React.lazy(() => import("containers/Login"));

const Error404 = React.lazy(() => import("containers/Errors/error404"));

const Routes = () => (
  <Router>
    <React.Suspense fallback={<ComponentLoading />}>
      <SnackBar />
      <Container maxWidth="md">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/404" component={Error404} />
          <Route component={Error404} />
        </Switch>
      </Container>
    </React.Suspense>
  </Router>
);

export default Routes;
