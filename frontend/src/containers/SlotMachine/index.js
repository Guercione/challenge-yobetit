import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";

import Machine from "./Machine";
import Rules from "./Rules";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import makeStyles from "@material-ui/styles/makeStyles";

const styles = makeStyles((theme) => ({
  content: {
    width: "100%",
    padding: 15,
  },
  card: {
    width: 100,
    height: 100,
  },
}));

function SlotMachine({ coins }) {
  const classes = styles();

  return (
    <Grid container justify="space-between">
      <Grid item xs={12} md={6}>
        <Machine />
      </Grid>
      <Grid item xs={12} md={4}>
        <Rules />
      </Grid>
    </Grid>
  );
}
const mapStateToProps = (store) => ({
  coins: store.user.coins,
});

export default connect(mapStateToProps, {})(SlotMachine);
