import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import Spinner from "./components/Spinner";
import LandingPage from "./pages/LandingPage";

import "./assets/scss/styles.scss";
import "./assets/js/index";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/menu" component={LandingPage} />
          <Route exact path="/gallery" component={LandingPage} />
          <Route exact path="/about" component={LandingPage} />
          <Route exact path="/book" component={LandingPage} />
        </Switch>
      </Router>
    );
  }
}
