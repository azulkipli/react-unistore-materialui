import React from "react";
import PropTypes from "prop-types";

import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import ExploreIcon from "@material-ui/icons/Explore";
import PersonIcon from "@material-ui/icons/Person";
import NotificationsIcon from "@material-ui/icons/Notifications";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import InboxIcon from "@material-ui/icons/Inbox";

import withRoot from "../withRoot";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  navigation: {
    width: "100%",
    position: "fixed",
    bottom: "0",
    flexGrow: 1
  },
  logo: {
    flexGrow: 1,
    textAlign: "center",
    cursor: "pointer"
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  menuHide: {
    display: "none"
  },
  appbar: {
    boxShadow: "0px 2px 4px -1px rgba(0, 0, 0, 0.1), 0px 2px 5px 0px rgba(0, 0, 0, 0.1), 0px 1px 5px 0px rgba(0, 0, 0, 0.1)"
  }
});

class Index extends React.Component {
  state = {
    open: false,
    auth: true,
    anchorEl: null
  };

  handleClose = () => {
    this.setState({
      open: false
    });
  };

  handleClick = () => {
    this.setState({
      open: true
    });
  };

  handleChange = event => {
    this.setState({ auth: event.target.checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  changeBottomNav = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { auth, anchorEl, value } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.appbar}>
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon className={classes.menuHide} />
            </IconButton>
            <Typography variant="title" color="inherit" className={classes.logo}>
              LOGO
            </Typography>
            {auth && (
              <div>
                <IconButton aria-owns={open ? "menu-appbar" : null} aria-haspopup="true" onClick={this.handleMenu} color="inherit">
                  <InboxIcon />
                </IconButton>
              </div>
            )}
          </Toolbar>
        </AppBar>
        <BottomNavigation color="default" value={value} onChange={this.changeBottomNav} showLabels className={classes.navigation}>
          <BottomNavigationAction icon={<MenuIcon />} />
          <BottomNavigationAction icon={<ExploreIcon />} />
          <BottomNavigationAction icon={<CameraAltIcon />} />
          <BottomNavigationAction icon={<NotificationsIcon />} />
          <BottomNavigationAction icon={<PersonIcon />} />
        </BottomNavigation>
      </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRoot(withStyles(styles)(Index));
