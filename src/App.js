import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import Spinner from "./components/Spinner";
import LandingPage from "./pages/LandingPage";
import MenuPage from "./pages/MenuPage";
import GalleryPage from "./pages/GalleryPage";
import AboutPage from "./pages/AboutPage";
import BookPage from "./pages/BookPage";
import BookNow from "./pages/BookPage/BookNow";
import NotFoundPage from "./pages/NotFoundPage";

import "./assets/scss/styles.scss";
import "./assets/js/index";

// import ContactData from "./json/Contact.json";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/menu" component={MenuPage} />
          <Route path="/gallery" component={GalleryPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/book" component={BookPage} />
          <Route path="/booknow" component={BookNow} />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    );
  }
}
