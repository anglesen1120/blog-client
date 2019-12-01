import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store";
import App from "./containers/App";
import "sanitize.css/sanitize.css";
import Modal from "react-modal";

const MOUNT_NODE = document.getElementById("root");
Modal.setAppElement(MOUNT_NODE);

ReactDOM.render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  MOUNT_NODE
);
