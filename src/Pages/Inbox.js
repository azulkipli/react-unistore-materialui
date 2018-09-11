import React from "react";

const Inbox = ({ location }) => (
  <div style={{ textAlign: "center" }}>
    <h3>{location.pathname}</h3>
    <p>authenticated page</p>
  </div>
);

export default Inbox;
