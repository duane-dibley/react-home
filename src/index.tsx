import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { logger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import App from "./app";
import reducer from "./reducers";
import saga from "./saga";

const sagaMiddleWare = createSagaMiddleware();

const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleWare, logger)
);

sagaMiddleWare.run(saga);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("appdiv")
);
