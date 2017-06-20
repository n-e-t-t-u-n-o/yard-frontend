import React, { Component } from "react";
import "./App.css";

import GlobalHeader from './GlobalHeader'
import Hero from './Complexes/List/Hero'
import Discover from './Complexes/List/Discover'
import GlobalFooter from './GlobalFooter'

class App extends Component {
  render() {
    return (
      <div className="App">
        <GlobalHeader />
        <Hero />
        <Discover />                 {/*
        <Cards />         */}
        <GlobalFooter />
      </div>
    );
  }
}

export default App;
