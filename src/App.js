import React, { Component } from "react";
import "./App.css";

import GlobalHeader from './GlobalHeader'

class App extends Component {
  render() {
    return (
      <div className="App">
        <GlobalHeader />
        {/*
        <MainLogo />
        <Description />
        <Footer />
        */}
      </div>
    );
  }
}

export default App;
