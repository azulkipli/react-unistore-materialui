import React from "react";
import PropTypes from "prop-types";
import withRoot from "../withRoot";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
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

class Explore extends React.Component {
  render() {
    const { classes, history } = this.props;

    return (
      <div className={classes.rowWrap}>
        <div className={classes.avatarWrap}>
          <h3>Explore</h3>
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
        <Button variant="contained" size="small" className={classes.button} onClick={() => history.push("/signup")}>
          Signup to explore more
        </Button>
      </div>
    );
  }
}

Explore.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRoot(withStyles(styles)(Explore));
