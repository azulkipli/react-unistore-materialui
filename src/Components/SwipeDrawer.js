import React from "react";
import { hot } from "react-hot-loader";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import SettingsIcon from "@material-ui/icons/Settings";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import InboxIcon from "@material-ui/icons/Inbox";

const styles = theme => ({
  list: {
    width: 250
  }
});

const SwipeDrawer = props => (
  <SwipeableDrawer
    open={props.openDrawer}
    onClose={() => props.toggleDrawer()}
    onOpen={() => props.toggleDrawer()}
  >
    <div
      tabIndex={0}
      role="button"
      onClick={() => props.toggleDrawer()}
      onKeyDown={() => props.toggleDrawer()}
    >
      <List component="nav" className={styles.list}>
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItem>
      </List>
      <Divider />
      <List component="nav" className={styles.list}>
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
        {props.login ? (
          <ListItem button onClick={() => props.Logout()}>
            <ListItemIcon>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        ) : (
          <ListItem button onClick={() => props.history.push("/signin")}>
            <ListItemIcon>
              <AccountBoxIcon />
            </ListItemIcon>
            <ListItemText primary="Login" />
          </ListItem>
        )}
      </List>
      <div style={{ position: "fixed", bottom: 10, width: "100%" }}>
        <Divider />
        <p style={{ textAlign: "center" }}>
          crafted by{" "}
          <a href="https://github.com/azulkipli" target="_blank" rel="noopener noreferrer">
            Azul
          </a>
        </p>
      </div>
    </div>
  </SwipeableDrawer>
);

export default hot(module)(SwipeDrawer);
