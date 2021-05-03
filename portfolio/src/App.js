import React, { Component } from "react";
// import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home"
import Portfolio from "./pages/Portfolio"
import "./App.css"


class App extends Component {
  render() {
    return (
      <HashRouter basename={process.env.PUBLIC_URL}>
        <div className="App">
          <Nav />
          <Switch>
            <Route path='/portfolio'>
              <Portfolio />
            </Route>
            <Route exact path={'/'}>
              <Home />
            </Route>
          </Switch>
        </div>
      </HashRouter>
    );

  }
}

export default App;

