import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { HashRouter, Route, Switch, withRouter } from "react-router-dom";
import HomeComponent from "./components/container/HomeComponent";
import NavigationComponent from "./components/container/NavigationComponent";
import WeatherComponent from "./components/container/WeatherComponent";
import configureStore from "./store/configureStore";

import "./app.scss";

const store = configureStore();

class App extends React.Component {

  public render() {
    return <Provider store={store}>
      <HashRouter>

        <header>
          <NavigationComponent />
        </header>

        <main>
          <Switch>
            <Route path="/" exact component={withRouter(HomeComponent)}></Route>
            <Route path="/weather" exact component={WeatherComponent}></Route>
          </Switch>
        </main>

      </HashRouter>
    </Provider>;
  }

}

ReactDOM.render(
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>,
  document.getElementById("appdiv")
);
