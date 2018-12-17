import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import withRoot from "../withRoot";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import Loading from "../components/Loading";
import LazyLoad from "react-lazyload";
import placeholder from "../images/placeholder.png";

const styles = theme => ({
  row: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  rowWrap: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  avatarWrap: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    width: "100%"
  },
  bigAvatar: {
    width: 100,
    height: 100
  },
  listWrap: {
    width: "auto"
  },
  listItem: {
    display: "inline-flex",
    width: "23.5%"
  },
  button: {
    margin: theme.spacing.unit,
    marginBottom: "80px"
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

const li_2 = {
  width: "50%",
  height: "auto",
  overflow: "hidden",
  listStyle: "none",
  padding: "20px 20px"
};
const hiddenBlock = { display: "block", overflow: "hidden", height: "auto" };

const pTitle = {
  fontSize: "16px",
  fontWeight: "bold",
  lineHeight: "16px",
  padding: "0",
  margin: "2px"
};
const pSubTitle = {
  fontSize: "12px",
  lineHeight: "13px",
  padding: "0",
  margin: "2px",
  height: "40px"
};

const ul_li = { display: "flex", flexWrap: "wrap", padding: "2px 2px", margin: "-2px -2px" };

class Explore extends React.Component {
  componentDidMount() {
    // action to get resto list
    this.props.getResto();
  }

  render() {
    const { classes, listResto } = this.props;
    // filter resto open_time
    
    return (
      <React.Fragment>
        <main className={classes.layout}>
          <Typography variant="title" className={classes.headline}>
            Restaurants
          </Typography>
          <div className={classes.row}>
            <ul style={ul_li}>
              {listResto.map(tile => {
                return (
                  <li key={tile.id} style={li_2}>
                    <LazyLoad scroll offset={160} height={160} placeholder={<Loading />}>
                      <div style={hiddenBlock}>
                        <p style={pTitle}>{tile.name}</p>
                        <p style={pSubTitle}>
                          <b>Open Time:</b>
                          <br />
                          {tile.open_time}
                        </p>
                        <img src={placeholder} alt={tile.name} />
                      </div>
                    </LazyLoad>
                  </li>
                );
              })}
            </ul>
          </div>
          <Button variant="outlined" color="default" className={classes.bottomBtn}>
            More..
          </Button>
        </main>
      </React.Fragment>
    );
  }
}

Explore.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect(
  "listResto",
  actions
)(withRouter(withRoot(withStyles(styles)(Explore))));
