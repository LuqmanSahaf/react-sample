import { combineReducers } from "redux";
import boxes from "./boxes";

const rootReducer = combineReducers({
  boxes: boxes
});
export default rootReducer;
