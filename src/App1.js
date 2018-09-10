import React from "react";
import { withRouter } from "react-router-dom";
import MainRoute from "./routes/MainRoute";
import PropTypes from "prop-types";

import { connect } from "unistore/react";
import { actions } from "./store";

const App = connect(
  "count",
  actions
)(({ count, increment }) => (
  <div>
    <p>Count: {count}</p>
    <button onClick={increment}>Increment</button>
  </div>
));

export default App;
