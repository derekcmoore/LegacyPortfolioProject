import React, { Component } from "react";
import Navigation from "./components/Navigation/Navigation";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <div id="root">
        <Navigation />
        <h1 className="test">Derek Moore</h1>
      </div>
    );
  }
}

export default App;
