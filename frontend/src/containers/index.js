import React from "react";
import Store from "redux/store";
import { Provider } from "react-redux";

import palette from "constants/palette";

import Routes from "./Routes";

import Container from "@material-ui/core/Grid";
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
    h1: {
      fontSize: 28,
    },
    subtitle1: {
      fontSize: 18,
    },
    body1: {
      fontSize: 16,
      color: palette["grey"],
    },
  },
});

const App = () => (
  <Provider store={Store}>
    <MuiThemeProvider theme={theme}>
      <Routes />
    </MuiThemeProvider>
  </Provider>
);

export default App;
