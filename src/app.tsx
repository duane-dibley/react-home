import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import configureStore from './store/configureStore';
import HomeComponent from './components/container/HomeComponent';
import NavigationComponent from './components/container/NavigationComponent';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <NavigationComponent />
    <HomeComponent />
  </Provider>,
  document.getElementById("appdiv")
);
