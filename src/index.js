import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "unistore/react";
import { store } from "./store";

// add container for hot reload
import { AppContainer } from "react-hot-loader";

// import ListItems from "./Components/listItems";
// import AddItems from "./Components/addItem";

import Index from "./Pages/index";
import SignIn from "./Pages/SignIn";

import registerServiceWorker from "./registerServiceWorker";

// const styles = {
//   fontFamily: "sans-serif",
//   textAlign: "center"
// };

// Wrap the rendering in a function:
const render = () => {
  ReactDOM.render(
    // Wrap App inside AppContainer
    <AppContainer>
      <Provider store={store}>
        <SignIn />
      </Provider>
    </AppContainer>,
    document.getElementById("root")
  );
};

// render(
//   <Provider store={store}>
//     <div style={styles}>
//       <h2>Welcome to unistore</h2>
//       <AddItems />
//       <ListItems />
//     </div>
//   </Provider>,
//   document.getElementById("root")
// );

// Do this once
registerServiceWorker();

// Render once
render();

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept("./App", () => {
    render();
  });
}
