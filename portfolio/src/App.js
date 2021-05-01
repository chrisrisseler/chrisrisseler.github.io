import React from "react";
// import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home"
import Portfolio from "./pages/Portfolio"
import "./App.css"


function App() {
  return (
    <BrowserRouter>
      <div>
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
    </BrowserRouter>
  );
}

export default App;

