import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./App";
import Main from "./Main";

import store from "./redux/store";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  rootElement
);
