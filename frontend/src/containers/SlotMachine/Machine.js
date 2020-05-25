import React from "react";
import PropTypes from "prop-types";

import Spin from "utils/slotMachine";

import { connect } from "react-redux";
import { userAddCoin, userRemoveCoin } from "redux/actions/userAction";

import If from "components/If";
import Loading from "components/Loading";
import Button from "components/inputs/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import makeStyles from "@material-ui/styles/makeStyles";

const styles = makeStyles({
  content: {
    width: "100%",
    height: 225,
    margin: "15px 0",
  },
  game: {
    height: "100%",
    padding: 15,
  },
  card: {
    width: 100,
    height: 100,
    display: "flex",
    justifyContent: "center",
    "& img": {
      width: 70,
    },
  },
});

function Machine({ coins, userAddCoin, userRemoveCoin }) {
  const classes = styles();
  const [reels, setReels] = React.useState(["cherry", "cherry", "cherry"]);
  const [spinning, setSpinning] = React.useState(false);
  const [message, setMessage] = React.useState("");

  function handleSpin() {
    if (coins <= 0) return setMessage("Not enough coin");

    const result = Spin();
    setSpinning(true);
    setMessage("");
    userRemoveCoin(1);

    setTimeout(() => {
      setReels(result.reel);
      setSpinning(false);

      if (result.prize.prize) {
        userAddCoin(result.prize.prize);
        setMessage(`Congratulations you won ${result.prize.prize} coins`);
      } else {
        setMessage(`Sorry, but you haven't won. Try again!`);
      }
    }, 1000);

    console.log(result);
  }

  return (
    <Paper className={classes.content}>
      <Grid
        container
        direction="column"
        justify="space-around"
        alignItems="center"
        className={classes.game}
      >
        <Typography align="center" variant="subtitle1" color="primary">
          {message}
        </Typography>
        <Grid container justify="space-around">
          <Paper className={classes.card}>
            <If condition={spinning}>
              <Loading />
            </If>
            <If condition={!spinning}>
              <img
                alt="fruit"
                src={`images/fruits/${reels[0] || "cherry"}.svg`}
              />
            </If>
          </Paper>
          <Paper className={classes.card}>
            <If condition={spinning}>
              <Loading />
            </If>
            <If condition={!spinning}>
              <img
                alt="fruit"
                src={`images/fruits/${reels[1] || "cherry"}.svg`}
              />
            </If>
          </Paper>
          <Paper className={classes.card}>
            <If condition={spinning}>
              <Loading />
            </If>
            <If condition={!spinning}>
              <img
                alt="fruit"
                src={`images/fruits/${reels[2] || "cherry"}.svg`}
              />
            </If>
          </Paper>
        </Grid>

        <Button color="highlight" onClick={handleSpin} loading={spinning}>
          SPIN
        </Button>
      </Grid>
    </Paper>
  );
}
const mapStateToProps = (store) => ({
  coins: store.user.coins,
});

export default connect(mapStateToProps, { userAddCoin, userRemoveCoin })(
  Machine
);
