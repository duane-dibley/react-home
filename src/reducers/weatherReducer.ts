import { FETCH_WEATHER, WEATHER_RECEIVED } from "../actions/actionTypes";

export default function weather(state = { rows: [] }, action) {

  switch (action.type) {

    case FETCH_WEATHER:
      console.log(FETCH_WEATHER, "weatherReducer", action);
      return state;

    case WEATHER_RECEIVED:
      console.log(WEATHER_RECEIVED, "weatherReducer", action);
      return state;

    default:
      return state;
  }
}
