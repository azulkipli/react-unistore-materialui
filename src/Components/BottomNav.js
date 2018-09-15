import React from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import ExploreIcon from "@material-ui/icons/Explore";
import PersonIcon from "@material-ui/icons/Person";
import NotificationsIcon from "@material-ui/icons/Notifications";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import MenuIcon from "@material-ui/icons/Menu";
import { hot } from "react-hot-loader";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";

const styles = theme => ({
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

const BottomNav = props => (
  <BottomNavigation onChange={props.changeNav} showLabels className={props.classes.bottomNav}>
    <BottomNavigationAction
      tabIndex="1"
      title="menu"
      value="menu"
      icon={<MenuIcon />}
      className={props.classes.bottomNavAct}
    />
    <BottomNavigationAction
      tabIndex="2"
      title="explore"
      value="explore"
      icon={<ExploreIcon />}
      className={props.classes.bottomNavAct}
    />
    <BottomNavigationAction
      tabIndex="3"
      title="camera"
      value="camera"
      icon={<CameraAltIcon />}
      className={props.classes.bottomNavAct}
    />
    <BottomNavigationAction
      tabIndex="4"
      title="notification"
      value="notification"
      icon={<NotificationsIcon />}
      className={props.classes.bottomNavAct}
    />
    <BottomNavigationAction tabIndex="4" title="account" value="account" icon={<PersonIcon />} />
  </BottomNavigation>
);

BottomNav.propTypes = {
  classes: PropTypes.object.isRequired
};

export default hot(module)(withStyles(styles)(BottomNav));
