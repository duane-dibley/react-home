import { FETCH_DATA, RECEIVE_DATA } from "./actionTypes";

// function url() {
//   return "www.url.com";
// }

export function receiveData(param) {
  console.log("receiveData dataAction", param);
  return { type: RECEIVE_DATA, data: "receiveData data" };
}

export function fetchData(param) {
  return (dispatch, getState) => {
    console.log("fetchData action", { param, getState: getState() });
    dispatch({ type: FETCH_DATA, data: "fetchData data" });
  };
  //
  // return dispatch => {
  //   return fetch(url(), {
  //     method: "GET",
  //     mode: "cors",
  //     credentials: "include",
  //     headers: {
  //       "x-api-key": apiKey,
  //       "Accept": "application/json"
  //     }
  //   })
  //     .then(response => response.json())
  //     .then(json => dispatch(receiveStuff(json)));
  // };
}
