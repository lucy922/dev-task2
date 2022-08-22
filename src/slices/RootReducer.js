import { combineReducers } from "redux";
import dataReducers from "./dataSlice";

const reducers = combineReducers({
  data: dataReducers,
});

export default reducers;
