import React from "react";
import Loadable from "react-loadable";
import { Route, Redirect, Switch } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";

const Loading = () => <div>Loading...</div>;

const Home = Loadable({
  loader: () => import(/* webpackChunkName: "home"*/ "../Pages/Home"),
  loading: () => <Loading />
});

const SignIn = Loadable({
  loader: () => import(/* webpackChunkName: "signin"*/ "../Pages/SignIn"),
  loading: () => <Loading />
});

const Account = Loadable({
  loader: () => import(/* webpackChunkName: "account"*/ "../Pages/Account"),
  loading: () => <Loading />
});

const Explore = Loadable({
  loader: () => import(/* webpackChunkName: "explore"*/ "../Pages/Explore"),
  loading: () => <Loading />
});

const Camera = Loadable({
  loader: () => import(/* webpackChunkName: "camera"*/ "../Pages/Explore"),
  loading: () => <Loading />
});

const Inbox = Loadable({
  loader: () => import(/* webpackChunkName: "inbox"*/ "../Pages/Explore"),
  loading: () => <Loading />
});

const Notification = Loadable({
  loader: () => import(/* webpackChunkName: "inbox"*/ "../Pages/Explore"),
  loading: () => <Loading />
});

const NoMatch = Loadable({
  loader: () => import(/* webpackChunkName: "nomatch"*/ "../Pages/NoMatch"),
  loading: () => <Loading />
});

const fakeAuth = {
  login: false,
  authenticate(cb) {
    this.login = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    this.login = false;
    setTimeout(cb, 100);
  }
};

const PrivateRoute = ({ component: Component, ...rest }) => {
  const login = rest.login;
  return (
    <Route
      {...rest}
      render={props => (login ? <Component {...props} /> : <Redirect to={{ pathname: "/signin", state: { from: props.location } }} />)}
    />
  );
};

const MainRoute = connect(
  "login,email,password",
  actions
)(({ login }) => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/signin" component={SignIn} />
    <PrivateRoute login={login} path="/account" component={Account} />
    <PrivateRoute login={login} path="/camera" component={Camera} />
    <PrivateRoute login={login} path="/inbox" component={Inbox} />
    <PrivateRoute login={login} path="/notification" component={Notification} />
    <PrivateRoute login={login} path="/explore" component={Explore} />
    <Route component={NoMatch} />
  </Switch>
));

export default MainRoute;
