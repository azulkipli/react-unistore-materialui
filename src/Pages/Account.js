import React from "react";
import PropTypes from "prop-types";
import withRoot from "../withRoot";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import classNames from "classnames";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

const styles = theme => ({
  row: {
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
  }
});

const tileData = [
  {
    img: "https://material-ui.com/static/images/grid-list/breakfast.jpg",
    title: "Breakfast",
    author: "author",
    cols: 2,
    key: 1
  },
  {
    img: "https://material-ui.com/static/images/grid-list/burgers.jpg",
    title: "burgers2",
    author: "author",
    cols: 1,
    key: 2
  },
  {
    img: "https://material-ui.com/static/images/grid-list/camera.jpg",
    title: "burgers3",
    author: "author",
    cols: 1,
    key: 3
  },
  {
    img: "https://material-ui.com/static/images/grid-list/morning.jpg",
    title: "burgers",
    author: "author",
    cols: 1,
    key: 4
  },
  {
    img: "https://material-ui.com/static/images/grid-list/hats.jpg",
    title: "burgers",
    author: "author",
    cols: 1,
    key: 5
  },
  {
    img: "https://material-ui.com/static/images/grid-list/honey.jpg",
    title: "burgers",
    author: "author",
    cols: 1,
    key: 6
  },
  {
    img: "https://material-ui.com/static/images/grid-list/vegetables.jpg",
    title: "Breakfast",
    author: "author",
    cols: 2,
    key: 7
  },
  {
    img: "https://material-ui.com/static/images/grid-list/burgers.jpg",
    title: "burgers",
    author: "author",
    cols: 1,
    key: 8
  },
  {
    img: "https://material-ui.com/static/images/grid-list/camera.jpg",
    title: "burgers",
    author: "author",
    cols: 1,
    key: 9
  },
  {
    img: "https://material-ui.com/static/images/grid-list/morning.jpg",
    title: "burgers",
    author: "author",
    cols: 1,
    key: 10
  }
];

class Account extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.row}>
        <div className={classes.avatarWrap}>
          <Avatar
            alt="Adelle Charles"
            src="https://material-ui.com/static/images/uxceo-128.jpg"
            className={classNames(classes.avatar, classes.bigAvatar)}
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
        <div className={classes.row}>
          <GridList cellHeight={160} className={classes.gridList} cols={3}>
            {tileData.map(tile => (
              <GridListTile key={tile.key} cols={tile.cols || 1}>
                <img src={tile.img} alt={tile.title} />
              </GridListTile>
            ))}
          </GridList>
        </div>
      </div>
    );
  }
}

Account.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRoot(withStyles(styles)(Account));
