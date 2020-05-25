import React from "react";
import Store from "redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import palette from "constants/palette";

import Routes from "./Routes";
import Loading from "components/Loading";
import Grid from "@material-ui/core/Grid";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: palette["primary"],
      contrastText: palette["secondary"],
    },
    secondary: {
      main: palette["secondary"],
      contrastText: palette["primary"],
    },
    success: {
      main: palette["success"],
    },
    warning: {
      main: palette["warning"],
    },
    error: {
      main: palette["error"],
    },
  },
  typography: {
    fontFamily: "Texta",
    useNextVariants: true,
    subtitle1: {
      fontFamily: "Texta Bold",
      margin: "0 5px 0 0",
      fontSize: 18,
    },
    body1: {
      fontSize: 16,
      color: palette["grey"],
    },
  },
});

const ComponentLoading = (
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

const App = () => (
  <Provider store={Store.store}>
    <PersistGate loading={ComponentLoading} persistor={Store.persistor}>
      <MuiThemeProvider theme={theme}>
        <Routes />
      </MuiThemeProvider>
    </PersistGate>
  </Provider>
);

export default App;
