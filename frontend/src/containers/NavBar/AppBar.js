import React from "react";

import { clearLocalStorage } from "utils/localStorage";

import palette from "constants/palette";

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
import CashIcon from "@material-ui/icons/MonetizationOn";

const styles = makeStyles({
  avatar: { margin: "0 15px" },
  coin: { color: palette["highlight"] },
});

function NavBar({ userName, coins }) {
  const classes = styles();
  console.log(coins);
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
          <Grid item xs="auto" className={classes.coin}>
            <Grid container alignItems="center">
              <CashIcon />
              <Typography variant="subtitle1">{coins}</Typography>
            </Grid>
          </Grid>
          <Grid item xs="auto">
            <Grid container alignItems="center">
              <Typography>Hello, {userName}</Typography>
              <Avatar
                alt="Avatar Image"
                src="images/avatar.png"
                className={classes.avatar}
              ></Avatar>
              <Hidden mdDown>
                <IconButton onClick={() => clearLocalStorage()}>
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

const mapStateToProps = ({ user }) => ({
  userName: user.userName,
  coins: user.coins,
});

export default connect(mapStateToProps)(NavBar);
