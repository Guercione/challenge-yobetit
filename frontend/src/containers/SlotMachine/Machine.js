import React from "react";
import PropTypes from "prop-types";

import Spin from "utils/slotMachine";

import { connect } from "react-redux";
import { userAddCoin, userRemoveCoin } from "redux/actions/userAction";

import Reel from "./Reel";
import Button from "components/inputs/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import makeStyles from "@material-ui/styles/makeStyles";

const styles = makeStyles({
  content: {
    width: "100%",
    margin: "15px 0",
  },
  game: {
    height: "100%",
    minHeight: 230,
    padding: 15,
  },
});

function Machine({ coins, userAddCoin, userRemoveCoin }) {
  const classes = styles();
  const [reels, setReels] = React.useState(["cherry", "cherry", "cherry"]);
  const [message, setMessage] = React.useState("");
  const [spinning1, setSpinning1] = React.useState(false);
  const [spinning2, setSpinning2] = React.useState(false);
  const [spinning3, setSpinning3] = React.useState(false);

  function handleSpin() {
    if (coins <= 0) return setMessage("Not enough coin");

    const result = Spin();
    setSpinning1(true);
    setSpinning2(true);
    setSpinning3(true);
    setMessage("");
    userRemoveCoin(1);

    setTimeout(() => {
      setReels(result.reel);
      setSpinning1(false);
      setTimeout(() => setSpinning2(false), 1000);
      setTimeout(() => {
        setSpinning3(false);
        if (result.prize.prize) {
          userAddCoin(result.prize.prize);
          setMessage(`Congratulations you won ${result.prize.prize} coins`);
        } else {
          setMessage(`Sorry, but you haven't won. Try again!`);
        }
      }, 2000);
    }, 1000);
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
          {message ||
            (spinning1 || spinning2 || spinning3
              ? "Spinning..."
              : "Click in SPIN to play")}
        </Typography>

        <Grid container justify="space-around">
          <Reel spinning={spinning1} fruit={reels[0]} />
          <Reel spinning={spinning2} fruit={reels[1]} />
          <Reel spinning={spinning3} fruit={reels[2]} />
        </Grid>

        <Button color="highlight" onClick={handleSpin} loading={spinning3}>
          SPIN
        </Button>
      </Grid>
    </Paper>
  );
}

Machine.propTypes = {
  coins: PropTypes.number,
  userAddCoin: PropTypes.func.isRequired,
  userRemoveCoin: PropTypes.func.isRequired,
};

Machine.defaultProps = {
  coins: 0,
};

const mapStateToProps = (store) => ({
  coins: store.user.coins,
});

export default connect(mapStateToProps, { userAddCoin, userRemoveCoin })(
  Machine
);
