import { combineReducers } from "redux";
import { reducer } from "redux-form";
import data from "./dataReducer";

const rootReducer = combineReducers({
  data,
  form: reducer
});

export default rootReducer;
