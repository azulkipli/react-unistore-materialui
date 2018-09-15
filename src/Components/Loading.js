import React from "react";
import preloader from "../images/preloader.svg";

const style = {
  margin: "20px auto",
  display: "flex"
};

const Loading = () => <img src={preloader} alt="loading..." style={style} />;

export default Loading;
