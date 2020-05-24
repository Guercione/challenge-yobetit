import React from "react";

import palette from "constants/palette";

import MenuList from "./MenuList";
import MenuMobile from "./MenuMobile";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Avatar from "@material-ui/core/Avatar";
import Hidden from "@material-ui/core/Hidden";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import makeStyles from "@material-ui/styles/makeStyles";
import ExitIcon from "@material-ui/icons/ExitToApp";

const styles = makeStyles({
  content: { paddingTop: 70 },
  avatar: { margin: "0 15px" },
});

function NavBar() {
  const classes = styles();

  return (
    <AppBar position="absolute" color="secondary">
      <Toolbar>
        <Grid container justify="space-between" alignItems="center">
          <Hidden mdUp>
            <MenuMobile />
          </Hidden>
          <Hidden mdDown>
            <Grid item xs="auto">
              <MenuList />
            </Grid>
          </Hidden>
          <Grid item xs="auto">
            <Grid container alignItems="center">
              <Typography>Hello, {"Guilherme"}</Typography>
              <Avatar
                alt="Avatar Image"
                src="images/avatar.png"
                className={classes.avatar}
              ></Avatar>
              <Hidden mdDown>
                <IconButton>
                  <ExitIcon color="primary" />
                </IconButton>
              </Hidden>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
