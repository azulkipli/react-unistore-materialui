import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { hot } from "react-hot-loader";
import LazyLoad from "react-lazyload";
import Loading from "../Components/Loading";
import { tileData } from "../dummyData";

const styles = theme => ({
  row: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  bottomBtn: {
    display: "flex",
    margin: "20px auto 80px",
    textTransform: "capitalize"
  },
  headline: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: theme.spacing.unit * 1.5,
    marginBottom: theme.spacing.unit * 1.5
  }
});

const img_1 = { left: "50%", position: "relative", transform: "translateX(-50%)", height: "100%" };
const img_2 = { top: "50%", position: "relative", transform: "translateY(-50%)", width: "100%" };
const li_1 = {
  width: "33.3333%",
  height: "160px",
  overflow: "hidden",
  listStyle: "none",
  padding: "2.5px 2px"
};
const li_2 = {
  width: "66.6667%",
  height: "160px",
  overflow: "hidden",
  listStyle: "none",
  padding: "2.5px 2px"
};
const ul_li = { display: "flex", flexWrap: "wrap", padding: 0, margin: "-2px -2px" };

class Home extends React.Component {
  Loading = () => {
    console.log("loaded");
  };
  render() {
    const { classes } = this.props;

    const forDeletion = [8, 9, 10];
    const arrData = tileData.filter(item => !forDeletion.includes(item.key));
    return (
      <React.Fragment>
        <main className={classes.layout}>
          <Typography variant="title" className={classes.headline}>
            Home
          </Typography>
          <div className={classes.row}>
            <ul style={ul_li}>
              {arrData.map(tile => (
                <li key={tile.key} style={tile.cols === 2 ? li_2 : li_1}>
                  <LazyLoad scroll offset={160} height={160} placeholder={<Loading />}>
                    <div style={{ display: "block", overflow: "hidden", height: "160px" }}>
                      <img
                        src={tile.img}
                        alt={tile.title}
                        style={tile.cols === 2 ? img_2 : img_1}
                      />
                    </div>
                  </LazyLoad>
                </li>
              ))}
            </ul>
          </div>
          <Button
            variant="outlined"
            color="default"
            onClick={() => this.props.history.push("/signup")}
            className={classes.bottomBtn}
          >
            Signup to explore more
          </Button>
        </main>
      </React.Fragment>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default hot(module)(withRouter(withStyles(styles)(Home)));
