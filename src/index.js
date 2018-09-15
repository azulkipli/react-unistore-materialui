import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "unistore/react";
import { store } from "./store";

import { BrowserRouter } from "react-router-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

const rootEl = document.getElementById("root");
const render = Component =>
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <Component />
      </BrowserRouter>
    </Provider>,
    rootEl
  );

render(App);
registerServiceWorker();
