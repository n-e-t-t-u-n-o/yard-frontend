import React, { Component } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {Helmet} from "react-helmet";
import "./index.css";

import Header from './Header'
import Complexes from './Complexes/List'
import Complex from './Complexes/Show'
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="compass-app">
          <Helmet>
            <title>Compass Development</title>
          </Helmet>
          <Header />
          <Route exact path="/" component={Complexes} />
          <Route path="/show" component={Complex} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
