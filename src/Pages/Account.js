import React from "react";
import PropTypes from "prop-types";
import withRoot from "../withRoot";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import { hot } from "react-hot-loader";
import { connect } from "unistore/react";
import { actions } from "../store";
import Avatar from "@material-ui/core/Avatar";
import classNames from "classnames";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
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
  rowGrid: {
    marginBottom: "80px"
  },
  avatarWrap: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    width: "100%",
    marginTop: "15px"
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
  gridList: {
    paddingBottom: "90px"
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

class Account extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.row}>
        <div className={classes.avatarWrap}>
          <LazyLoad
            offset={100}
            height={100}
            placeholder={<Loading />}
            children={
              <Avatar className={classNames(classes.avatar, classes.bigAvatar)}>Az</Avatar>
            }
          />
        </div>
        <div className={classes.row}>
          <List className={classes.listWrap}>
            <ListItem className={classes.listItem}>
              <ListItemText primary="Point" secondary="560" />
            </ListItem>
            <ListItem className={classes.listItem}>
              <ListItemText primary="Posts" secondary="3421" />
            </ListItem>
            <ListItem className={classes.listItem}>
              <ListItemText primary="Following" secondary="300" />
            </ListItem>
            <ListItem className={classes.listItem}>
              <ListItemText primary="Followers" secondary="123590" />
            </ListItem>
          </List>
        </div>
        <div className={classes.rowGrid}>
          <ul style={ul_li}>
            {tileData.map(tile => (
              <li key={tile.key} style={tile.cols === 2 ? li_2 : li_1}>
                <LazyLoad key={tile.key} height={160} placeholder={<Loading />}>
                  <div style={{ display: "block", overflow: "hidden", height: "160px" }}>
                    <img src={tile.img} alt={tile.title} style={tile.cols === 2 ? img_2 : img_1} />
                  </div>
                </LazyLoad>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

Account.propTypes = {
  classes: PropTypes.object.isRequired
};

// export default withStyles(styles)(Account);

export default connect(
  "login,tileData",
  actions
)(hot(module)(withRouter(withRoot(withStyles(styles)(Account)))));
