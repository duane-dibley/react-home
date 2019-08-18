import * as React from "react";
import * as ReactDOM from "react-dom";
import HomeComponent from './components/HomeComponent';
import NavigationComponent from './components/NavigationComponent';

ReactDOM.render(
  <div>
    <NavigationComponent />
    <HomeComponent />
  </div>,
  document.getElementById("appdiv")
);
