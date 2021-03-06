import { all, put, takeLatest } from "redux-saga/effects";
import { FETCH_WEATHER, WEATHER_RECEIVED } from "../actions/actionTypes";

function* fetchWeather() {
  const json = yield fetch("https://newsapi.org/v1/articles?source=cnn&apiKey=c39a26d9c12f48dba2a5c00e35684ecc")
    .then(response => response.json());

  yield put({ type: WEATHER_RECEIVED, json: json.articles, });
}

function* actionWatcher() {
  yield takeLatest(FETCH_WEATHER, fetchWeather);
}

export default function* rootSaga() {
  yield all([
    actionWatcher(),
  ]);
}
