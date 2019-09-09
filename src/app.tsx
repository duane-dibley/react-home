import * as React from "react";
import { HashRouter, Route, Switch, withRouter } from "react-router-dom";
import "./app.scss";
import HomeComponent from "./components/container/HomeComponent";
import NavigationComponent from "./components/container/NavigationComponent";
import WeatherComponent from "./components/container/WeatherComponent";

// const store = configureStore();

export default class App extends React.Component {

  public render() {
    return <HashRouter>

      <header>
        <NavigationComponent />
      </header>

      <main>
        <Switch>
          <Route path="/" exact component={withRouter(HomeComponent)}></Route>
          <Route path="/weather" exact component={WeatherComponent}></Route>
        </Switch>
      </main>

    </HashRouter>;
  }

}
