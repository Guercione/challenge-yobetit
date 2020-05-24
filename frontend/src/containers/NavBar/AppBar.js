import React from "react";

import { connect } from "react-redux";

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
  avatar: { margin: "0 15px" },
});

function NavBar({ userName }) {
  const classes = styles();

  return (
    <AppBar position="absolute" color="secondary">
      <Toolbar>
        <Grid container justify="space-between" alignItems="center">
          <Hidden mdUp>
            <MenuMobile />
          </Hidden>
          <Hidden smDown>
            <Grid item xs="auto">
              <MenuList />
            </Grid>
          </Hidden>
          <Grid item xs="auto">
            <Grid container alignItems="center">
              <Typography>Hello, {userName}</Typography>
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

export default connect(({ user }) => ({ userName: user.userName }))(NavBar);
