import { combineReducers } from "redux";
import boxes from "./boxes";

const rootReducer = history =>
  combineReducers({
    boxes: boxes
  });
export default rootReducer;
