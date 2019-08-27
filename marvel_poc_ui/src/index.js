import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "materialize-css/dist/css/materialize.min.css";
import "material-icons/iconfont/material-icons.css";
import configureStore from "./helpers/configureStore";
import App from "./components/App";

//Reducer, initial state of application, applyMiddleware
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
