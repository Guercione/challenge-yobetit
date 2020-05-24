import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";
import NavBar from "containers/NavBar";
import ErrorBoundary from "containers/Errors/errorBoundary";
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
const SlotMachine = React.lazy(() => import("containers/SlotMachine"));
const Error404 = React.lazy(() => import("containers/Errors/error404"));

const Routes = () => (
  <Router>
    <React.Suspense fallback={<ComponentLoading />}>
      <SnackBar />
      <Container maxWidth="md">
        <ErrorBoundary>
          <Switch>
            <PrivateRoute exact path="/" component={Home} />
            <PrivateRoute exact path="/slot-machine" component={SlotMachine} />
            <Route exact path="/404" component={Error404} />
            <Route component={Error404} />
          </Switch>
        </ErrorBoundary>
      </Container>
    </React.Suspense>
  </Router>
);

export default Routes;
