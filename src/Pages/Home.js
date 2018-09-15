import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import withRoot from "../withRoot";
import { withRouter } from "react-router-dom";
import { hot } from "react-hot-loader";

import { connect } from "unistore/react";
import { actions } from "../store";

const styles = theme => ({
  layout: {
    width: "auto",
    display: "block", // Fix IE11 issue.
    paddingLeft: theme.spacing.unit * 1.5,
    paddingRight: theme.spacing.unit * 1.5,
    [theme.breakpoints.up(400 + theme.spacing.unit * 1.5 * 1.5)]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  headline: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: theme.spacing.unit * 4,
    marginBottom: theme.spacing.unit * 2
  }
});

class Home extends React.Component {
  render() {
    const { classes } = this.props;
    console.log("home props:", this.props);

    return (
      <React.Fragment>
        <main className={classes.layout}>
          <Typography variant="headline" className={classes.headline}>
            Home
          </Typography>
        </main>
      </React.Fragment>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect(
  "login,email",
  actions
)(hot(module)(withRouter(withRoot(withStyles(styles)(Home)))));
