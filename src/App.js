import React from "react";
import MainRoute from "./routes/MainRoute";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import withRoot from "./withRoot";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "./store";
import { hot } from "react-hot-loader";
import { Helmet } from "react-helmet";
// Material components
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import InboxIcon from "@material-ui/icons/Inbox";
// Custom components
import BottomNav from "./Components/BottomNav";
import logo from "./images/material_logo.svg";
import SwipeDrawer from "./Components/SwipeDrawer";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  logo: {
    flexGrow: 1,
    textAlign: "center",
    cursor: "pointer",
    fontSize: 12
  },
  imgLogo: {
    display: "inline-block",
    height: 32,
    width: 32
  },
  txtLogo: {
    display: "inline-block",
    fontSize: 16,
    lineHeight: "32px",
    verticalAlign: "bottom"
  },
  menuButton: {
    // marginRight: -theme.spacing.unit
  },
  appbar: {
    boxShadow:
      "0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)"
  },
  bottomNav: {
    position: "fixed",
    bottom: "0",
    width: "100%",
    boxShadow:
      "0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)"
  },
  bottomNavAct: {
    minWidth: "72px",
    maxWidth: "120px"
  }
});

class App extends React.Component {
  state = {
    bottomNav: "",
    openDrawer: false
  };
  changeNav = (event, value) => {
    if (value === "menu") {
      this.toggleDrawer();
    } else {
      this.props.history.push(value);
      this.setState({ bottomNav: value });
    }
  };

  toggleDrawer = () => {
    this.setState({ openDrawer: !this.state.openDrawer });
  };

  Logout = async () => {
    const { doLogout, history } = this.props;
    await doLogout();
    if (!this.props.login) {
      history.replace("/");
    }
  };

  render() {
    const { classes, login, history, location } = this.props;
    const { openDrawer } = this.state;
    const pathname = location.pathname;
    const home = login ? "/explore" : "/";
    return (
      <div className={classes.root}>
        <Helmet>
          <title>reunima | react unistore material-ui</title>
          <meta
            name="description"
            content="Progressive Web App using ReactJS Unistore Material-UI"
          />
          <meta
            name="keywords"
            content="pwa, reactjs, unistore, netlify, code-splitting, hot-reload"
          />
          <meta name="author" content="Azul" />
        </Helmet>
        <AppBar position="static" color="default" className={classes.appbar}>
          <Toolbar className={classes.topbar}>
            <IconButton className={classes.menuButton} color="default" aria-label="Menu">
              {pathname !== "/" ? <NavigateBeforeIcon /> : ""}
            </IconButton>
            <Typography
              variant="title"
              color="default"
              className={classes.logo}
              onClick={() => history.push(home)}
            >
              <img className={classes.imgLogo} src={logo} alt="Logo" />{" "}
              <span className={classes.txtLogo}>ReUniMa</span>
            </Typography>
            <IconButton
              className={classes.menuButton}
              color="default"
              aria-label="Inbox"
              onClick={() => history.push("/inbox")}
            >
              <InboxIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <MainRoute />
        <BottomNav changeNav={this.changeNav} />
        <SwipeDrawer
          login={login}
          history={history}
          openDrawer={openDrawer}
          toggleDrawer={this.toggleDrawer}
          Logout={this.Logout}
        />
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect(
  "login,email",
  actions
)(hot(module)(withRouter(withRoot(withStyles(styles)(App)))));
