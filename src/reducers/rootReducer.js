import { combineReducers } from "redux";
import homeReducer from "./homeReducer";
import postDetailsReducer from "./postDetailsReducer";
import userDetailsReducer from "./userDetailsReducer";

export default combineReducers({
  homeReducer,
  postDetailsReducer,
  userDetailsReducer
});
