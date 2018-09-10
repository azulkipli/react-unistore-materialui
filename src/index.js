import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "unistore/react";
import { store } from "./store";

// add container for hot reload
import { AppContainer } from "react-hot-loader";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import registerServiceWorker from "./registerServiceWorker";

// reaquired to use react-hot-loader
require("react-hot-loader/patch");
// console.log("store", store);
const rootEl = document.getElementById("root");
const render = Component =>
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <BrowserRouter>
          <Component />
        </BrowserRouter>
      </Provider>
    </AppContainer>,
    rootEl
  );

render(App);
if (module.hot) module.hot.accept("./App", () => render(App));
registerServiceWorker();
