import React from "react";
import MainRoute from "./routes/MainRoute";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import withRoot from "./withRoot";
import { withRouter } from "react-router-dom";

import { connect } from "unistore/react";
import { actions } from "./store";
import { hot } from "react-hot-loader";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";

import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import ExploreIcon from "@material-ui/icons/Explore";
import InboxIcon from "@material-ui/icons/Inbox";
import PersonIcon from "@material-ui/icons/Person";
import NotificationsIcon from "@material-ui/icons/Notifications";
import CameraAltIcon from "@material-ui/icons/CameraAlt";

import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import DraftsIcon from "@material-ui/icons/Drafts";
import SettingsIcon from "@material-ui/icons/Settings";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AccountBoxIcon from "@material-ui/icons/AccountBox";

import logo from "./images/material_logo.svg";

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
  list: {
    width: 250
  },
  appbar: {
    boxShadow: "0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)"
  },
  bottomNav: {
    position: "fixed",
    bottom: "0",
    width: "100%",
    boxShadow: "0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)"
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

  Logout = () => {
    this.props.doLogout();
    if (this.props.login) {
      this.props.history.push("/");
    }
  };

  render() {
    const { classes, login, history, location } = this.props;
    const { openDrawer } = this.state;
    const pathname = location.pathname;
    return (
      <div className={classes.root}>
        <AppBar position="static" color="default" className={classes.appbar}>
          <Toolbar className={classes.topbar}>
            <IconButton className={classes.menuButton} color="default" aria-label="Menu">
              {pathname !== "/" ? <NavigateBeforeIcon /> : ""}
            </IconButton>
            <Typography variant="title" color="default" className={classes.logo} onClick={() => history.push("/")}>
              <img className={classes.imgLogo} src={logo} alt="Logo" /> <span className={classes.txtLogo}>Soca</span>
            </Typography>
            <IconButton className={classes.menuButton} color="default" aria-label="Inbox" onClick={() => history.push("/inbox")}>
              <InboxIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <MainRoute />
        <BottomNavigation onChange={this.changeNav} showLabels className={classes.bottomNav}>
          <BottomNavigationAction value="menu" icon={<MenuIcon />} className={classes.bottomNavAct} />
          <BottomNavigationAction value="explore" icon={<ExploreIcon />} className={classes.bottomNavAct} />
          <BottomNavigationAction value="camera" icon={<CameraAltIcon />} className={classes.bottomNavAct} />
          <BottomNavigationAction value="notification" icon={<NotificationsIcon />} className={classes.bottomNavAct} />
          <BottomNavigationAction value="account" icon={<PersonIcon />} />
        </BottomNavigation>
        <Drawer open={openDrawer} onClose={() => this.toggleDrawer()}>
          <div tabIndex={0} role="button" onClick={() => this.toggleDrawer()} onKeyDown={() => this.toggleDrawer()}>
            <List component="nav" className={classes.list}>
              <ListItem button>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Inbox" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <DraftsIcon />
                </ListItemIcon>
                <ListItemText primary="Drafts" />
              </ListItem>
            </List>
            <Divider />
            <List component="nav" className={classes.list}>
              <ListItem button>
                <ListItemIcon>
                  <FavoriteIcon />
                </ListItemIcon>
                <ListItemText primary="Favorite" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary="Settings" />
              </ListItem>
              {login ? (
                <ListItem button onClick={() => this.Logout()}>
                  <ListItemIcon>
                    <ExitToAppIcon />
                  </ListItemIcon>
                  <ListItemText primary="Logout" />
                </ListItem>
              ) : (
                <ListItem button onClick={() => history.push("/signin")}>
                  <ListItemIcon>
                    <AccountBoxIcon />
                  </ListItemIcon>
                  <ListItemText primary="Login" />
                </ListItem>
              )}
            </List>
          </div>
        </Drawer>
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
