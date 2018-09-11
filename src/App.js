import React from "react";
import { withRouter } from "react-router-dom";
import MainRoute from "./routes/MainRoute";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import withRoot from "./withRoot";

import { connect } from "unistore/react";
import { actions } from "./store";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

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

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  logo: {
    flexGrow: 1,
    textAlign: "center",
    cursor: "pointer"
  },
  menuButton: {
    // marginLeft: -12,
    // marginRight: 20
  },
  list: {
    width: "250px"
  },
  topbar: {
    width: "100%"
  },
  bottomNav: {
    position: "fixed",
    bottom: "15px",
    width: "100%"
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

  render() {
    const { classes } = this.props;
    const { openDrawer } = this.state;
    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Toolbar className={classes.topbar}>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              {/* <MenuIcon /> */}
            </IconButton>
            <Typography variant="title" color="inherit" className={classes.logo} onClick={() => this.props.history.push("/")}>
              LOGO
            </Typography>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Inbox">
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
              <ListItem button onClick={() => this.props.doLogout()}>
                <ListItemIcon>
                  <ExitToAppIcon />
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItem>
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
)(withRouter(withRoot(withStyles(styles)(App))));

// export default withRouter(withRoot(withStyles(styles)(App)));
