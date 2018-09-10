import React from "react";
import { withRouter } from "react-router-dom";
import MainRoute from "./routes/MainRoute";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";

import { connect } from "unistore/react";
import { actions } from "./store";

const styles = theme => ({
  root: {
    flexGrow: 1
  }
});

class App extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <MainRoute />
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(App));
