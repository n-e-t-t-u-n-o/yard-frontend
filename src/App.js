import React, { Component } from "react";
import "./index.css";
import { BrowserRouter as Router, Route } from 'react-router-dom'

import GlobalHeader from './GlobalHeader'

import Complexes from './Complexes/List'

import GlobalFooter from './GlobalFooter'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <GlobalHeader />
          <Route exact path="/" component={Complexes} />
          <GlobalFooter />
        </div>
      </Router>
    );
  }
}

export default App;
