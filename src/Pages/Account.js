import React from "react";
import PropTypes from "prop-types";
import withRoot from "../withRoot";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    flexGrow: 1
  }
});

class Account extends React.Component {
  render() {
    const { classes } = this.props;

    return <div className={classes.root}>Account</div>;
  }
}

Account.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRoot(withStyles(styles)(Account));
