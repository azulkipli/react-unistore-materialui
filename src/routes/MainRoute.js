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

const SignUp = Loadable({
  loader: () => import(/* webpackChunkName: "signup"*/ "../Pages/SignUp"),
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
  loader: () => import(/* webpackChunkName: "camera"*/ "../Pages/Inbox"),
  loading: () => <Loading />
});

const Inbox = Loadable({
  loader: () => import(/* webpackChunkName: "inbox"*/ "../Pages/Inbox"),
  loading: () => <Loading />
});

const Notification = Loadable({
  loader: () => import(/* webpackChunkName: "notification"*/ "../Pages/Notification"),
  loading: () => <Loading />
});

const NoMatch = Loadable({
  loader: () => import(/* webpackChunkName: "nomatch"*/ "../Pages/NoMatch"),
  loading: () => <Loading />
});

const PrivateRoute = ({ component: Component, ...args }) => {
  const login = args.login;
  console.log("args", args);
  return (
    <Route
      {...args}
      render={props => (login ? <Component {...props} /> : <Redirect to={{ pathname: "/signin", state: { from: props.location } }} />)}
    />
  );
};

const MainRoute = connect(
  "login,email,password",
  actions
)(({ login }) => {
  const c_store = JSON.parse(localStorage.getItem("unistorePersist"));
  console.log("c_store", c_store);
  let current_login = login;
  if (c_store.hasOwnProperty("login") && c_store.login) current_login = c_store.login;
  console.log("current_login", current_login);
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/explore" component={Explore} />
      <PrivateRoute login={current_login} path="/account" component={Account} />
      <PrivateRoute login={current_login} path="/camera" component={Camera} />
      <PrivateRoute login={current_login} path="/inbox" component={Inbox} />
      <PrivateRoute login={current_login} path="/notification" component={Notification} />
      <Route component={NoMatch} />
    </Switch>
  );
});

export default MainRoute;
