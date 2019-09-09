import { FETCH_WEATHER } from "./actionTypes";

export function fetchWeather() {
  return { type: FETCH_WEATHER, payload: "fetchWeather" };
}

  // thunk
  // return (dispatch, getState) => {
  //   console.log("fetchWeather", getState());
  //   dispatch({ type: FETCH_WEATHER, data: "fetchWeather" });
  // };
