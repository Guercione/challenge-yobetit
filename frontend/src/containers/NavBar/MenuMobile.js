import React from "react";

import MenuList from "./MenuList";
import Drawer from "@material-ui/core/Drawer";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import makeStyles from "@material-ui/styles/makeStyles";

const styles = makeStyles({
  drawer: {
    width: "60%",
    borderRadius: "0 0 100px 0",
    "& a": {
      margin: 15,
    },
  },
});

function NavBar() {
  const classes = styles();
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <React.Fragment>
      <Drawer
        anchor="left"
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        classes={{ paper: classes.drawer }}
      >
        <MenuList onClick={() => setMenuOpen(false)} />
      </Drawer>
      <IconButton
        edge="start"
        color="inherit"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <MenuIcon />
      </IconButton>
    </React.Fragment>
  );
}

export default NavBar;
