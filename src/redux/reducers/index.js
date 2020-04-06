import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import boxes from "./boxes";

const rootReducer = history =>
  combineReducers({
    boxes: boxes,
    router: connectRouter(history)
  });
export default rootReducer;
