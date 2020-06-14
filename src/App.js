import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// import Spinner from "./components/Spinner";
import LandingPage from "./pages/LandingPage";
import MenuPage from "./pages/MenuPage";
import GalleryPage from "./pages/GalleryPage";
import AboutPage from "./pages/AboutPage";
import BookPage from "./pages/BookPage";

import "./assets/scss/styles.scss";
import "./assets/js/index";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/menu" component={MenuPage} />
        <Route exact path="/gallery" component={GalleryPage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/book" component={BookPage} />
      </Router>
    );
  }
}
