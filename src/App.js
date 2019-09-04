import React, { Component } from "react";
import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/About/About";
import Projects from "./components/About/About";
import Education from "./components/About/About";
import Contact from "./components/About/About";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <div id="root">
        <Navigation />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </div>
    );
  }
}

export default App;
