import { FETCH_DATA, RECEIVE_DATA } from './actionTypes';

function url() {
  return 'www.url.com';
}

export function receiveData(data: any) {
  return { type: RECEIVE_DATA, data: 'receiveData data' };
}

export function fetchData() {
  return { type: FETCH_DATA, data: 'fetchData data' };
  //
  // return dispatch => {
  //   return fetch(url(), {
  //     method: 'GET',
  //     mode: 'cors',
  //     credentials: 'include',
  //     headers: {
  //       'x-api-key': apiKey,
  //       'Accept': 'application/json'
  //     }
  //   })
  //     .then(response => response.json())
  //     .then(json => dispatch(receiveStuff(json)));
  // };
}
