import React, { Component } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {Helmet} from "react-helmet";
import "./index.css";

import GlobalHeader from './GlobalHeader'
import Complexes from './Complexes/List'
import GlobalFooter from './GlobalFooter'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="CompassApp">
          <Helmet>
            <title>Compass Development</title>
            <meta charset="UTF-8"/>
            <meta http-equiv="X-UA-Compatible" content="IE=Edge"/>
          </Helmet>
          <GlobalHeader />
          <Route exact path="/" component={Complexes} />
          <GlobalFooter />
        </div>
      </Router>
    );
  }
}

export default App;
