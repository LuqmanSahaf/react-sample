import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import Main from "./Main";
import App from "./App";

import store from "./redux/store";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  rootElement
);
