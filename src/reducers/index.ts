import { combineReducers } from "redux";
import { reducer } from "redux-form";
import weather from "./weatherReducer";

const rootReducer = combineReducers({
  form: reducer,
  weather
});

export default rootReducer;
