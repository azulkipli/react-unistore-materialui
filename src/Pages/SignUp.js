import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";

import { connect } from "unistore/react";
import { actions } from "../store";
import withRoot from "../withRoot";

const styles = theme => ({
  layout: {
    width: "auto",
    display: "block", // Fix IE11 issue.
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE11 issue.
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  },
  bottomBtn: {
    marginBottom: "80px"
  }
});

class SignUp extends React.Component {
  postSignUp = async () => {
    await this.props.doSignup();
    const current_login = this.props.login;
    // console.log("current_login", current_login);
    if (current_login === true) this.props.history.push("/account");
  };
  render() {
    const { classes, setField, history } = this.props;
    // console.log("sigin props:", this.props);
    return (
      <React.Fragment>
        <CssBaseline />
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography variant="headline">Sign Up</Typography>
            <form className={classes.form} onSubmit={event => event.preventDefault()}>
              <FormControl margin="normal" fullWidth>
                <InputLabel htmlFor="email">Email</InputLabel>
                <Input id="email" name="email" autoFocus onChange={e => setField(e)} />
              </FormControl>
              <FormControl margin="normal" fullWidth>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input name="password" type="password" id="password" onChange={e => setField(e)} />
              </FormControl>
              <FormControl margin="normal" fullWidth>
                <InputLabel htmlFor="user_name">Username</InputLabel>
                <Input name="user_name" type="text" id="user_name" onChange={e => setField(e)} />
              </FormControl>
              <FormControl margin="normal" fullWidth>
                <InputLabel htmlFor="full_name">Fullname</InputLabel>
                <Input name="full_name" type="text" id="full_name" onChange={e => setField(e)} />
              </FormControl>
              <FormControl margin="normal" fullWidth>
                <InputLabel htmlFor="mobile_phone">Mobilephone</InputLabel>
                <Input name="mobile_phone" type="text" id="mobile_phone" onChange={e => setField(e)} />
              </FormControl>
              <Button type="submit" fullWidth variant="raised" color="default" onClick={() => this.postSignUp()} className={classes.submit}>
                Signup
              </Button>
            </form>
          </Paper>
          <Button type="submit" fullWidth color="default" onClick={() => history.push("/signin")} className={classes.bottomBtn}>
            Signin
          </Button>
        </main>
      </React.Fragment>
    );
  }
}

SignUp.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect(
  "login,email,password,confirm_password,full_name,user_name,mobile_phone",
  actions
)(withRoot(withStyles(styles)(SignUp)));
