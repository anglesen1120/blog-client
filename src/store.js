import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";

export default function configureStore(initialState = {}) {
  let composeEnhancers = compose;

  if (process.env.NODE_ENV !== "production" && typeof window === "object") {
    if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});
  }

  const enhancers = [applyMiddleware(thunk)];

  return createStore(rootReducer, composeEnhancers(...enhancers));
}
