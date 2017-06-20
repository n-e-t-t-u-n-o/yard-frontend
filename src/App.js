import React, { Component } from "react";
import "./App.css";

import GlobalHeader from './GlobalHeader'
import GlobalFooter from './GlobalFooter'

class App extends Component {
  render() {
    return (
      <div className="App">
        <GlobalHeader />
        {/*
        <DiscoverIntro />
        <Cards />         */}
        <GlobalFooter />
      </div>
    );
  }
}

export default App;
