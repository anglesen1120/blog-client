import { combineReducers } from "redux";
import homeReducer from "./homeReducer";
import postDetailsReducer from "./postDetailsReducer";
import userDetailsReducer from "./postDetailsReducer";

export default combineReducers({
  homeReducer,
  postDetailsReducer,
  userDetailsReducer
});
