import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store";
import App from "./containers/App";
import "sanitize.css/sanitize.css";
import Modal from "react-modal";
import { loadState, saveState } from "./services/persist.service";
import { throttle } from "lodash";

const initialState = loadState();
const store = configureStore(initialState);
const MOUNT_NODE = document.getElementById("root");
Modal.setAppElement(MOUNT_NODE);

store.subscribe(
  throttle(() => {
    saveState({
      homeReducer: {
        usersData: store.getState().homeReducer.usersData
      },
      postDetailsReducer: {
        comments: store.getState().postDetailsReducer.comments
      },
      userDetailsReducer: {
        userDetailsData: store.getState().userDetailsReducer.userDetailsData
      }
    });
  }, 1000)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  MOUNT_NODE
);
