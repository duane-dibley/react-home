import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeComponent from "./components/container/HomeComponent";
import NavigationComponent from "./components/container/NavigationComponent";
import WeatherComponent from "./components/container/WeatherComponent";
import configureStore from "./store/configureStore";

const store = configureStore();

class App extends React.Component {

  public render() {
    return <Provider store={store}>
      <BrowserRouter>

        <header>
          <NavigationComponent />
        </header>

        <main>
          <Switch>
            <Route path="/" exact component={HomeComponent}></Route>
            <Route path="/weather" exact component={WeatherComponent}></Route>
          </Switch>
        </main>

      </BrowserRouter>
    </Provider>;
  }

}

ReactDOM.render(
  <App />,
  document.getElementById("appdiv")
);
