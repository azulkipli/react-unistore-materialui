import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const Home = () => (
  <Paper elevation={1}>
    <Typography variant="headline" component="h3">
      This is a sheet of paper.
    </Typography>
    <Typography component="p">Paper can be used to build surface or other elements for your application.</Typography>
  </Paper>
);

export default Home;
