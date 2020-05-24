import React from "react";
import PropTypes from "prop-types";

import palette from "constants/palette";
import links from "constants/navbar";
import { clearLocalStorage } from "utils/localStorage";

import { NavLink } from "react-router-dom";
import Hidden from "@material-ui/core/Hidden";
import makeStyles from "@material-ui/styles/makeStyles";
import ExitIcon from "@material-ui/icons/ExitToApp";

const styles = makeStyles({
  active: { color: palette["highlight"] },
  link: { textDecoration: "none", marginRight: 15, fontSize: 18 },
});

function MenuList({ onClick }) {
  const classes = styles();

  return (
    <React.Fragment>
      {links.map((item) => (
        <NavLink
          exact
          key={item.name}
          to={item.link}
          onClick={onClick}
          activeClassName={classes.active}
          className={classes.link}
        >
          {item.name.toUpperCase()}
        </NavLink>
      ))}
      <Hidden mdUp>
        <NavLink
          exact
          to="/"
          onClick={() => clearLocalStorage()}
          className={classes.link}
        >
          <ExitIcon />
        </NavLink>
      </Hidden>
    </React.Fragment>
  );
}

MenuList.propTypes = { onClick: PropTypes.func };

MenuList.defaultProps = { onClick: () => {} };

export default MenuList;
