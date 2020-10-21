import React, { Component } from "react";
import Navigation from "./components/Navigation/Navigation";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import "./App.scss";

class App extends Component {
    getScrollLocation() {
        window.onscroll = function () {
            let elements = document.getElementsByClassName("section");
            let doc = document.documentElement;
            let st = window.pageYOffset;
            let hash = "";
            let i;
            for (i = 0; i < elements.length; i++) {
                let box = elements[i].getBoundingClientRect();
                let top = box.top + window.pageYOffset - doc.clientTop;
                if (top > st + window.screen.height / 3.5) {
                    hash = elements[i - 1].id;
                    break;
                }
            }
            if (i === elements.length) {
                hash = elements[elements.length - 1].id;
            }
            if ("#" + hash !== window.location.hash) {
                if (!hash && window.location.hash !== "") {
                    let loc = window.location;
                    window.history.pushState(
                        "",
                        document.title,
                        loc.pathname + loc.search
                    );
                    window.dispatchEvent(new HashChangeEvent("hashchange"));
                } else if (hash) {
                    window.history.replaceState(null, null, "#" + hash);
                    window.dispatchEvent(new HashChangeEvent("hashchange"));
                }
            }
        };
    }

    componentDidMount() {
        this.getScrollLocation();
    }

    render() {
        return (
            <div id="root">
                <Navigation />
                <div className="content">
                    <section className="section full-screen">
                        <Home />
                    </section>
                    <section id="about" className="section full-screen">
                        <About />
                    </section>
                    <section id="skills" className="section full-screen">
                        <Skills />
                    </section>
                    <section id="projects" className="section full-screen">
                        <Projects />
                    </section>
                    <section id="education" className="section full-screen">
                        <Education />
                    </section>
                    <section id="contact" className="section full-screen">
                        <Contact />
                    </section>
                </div>
            </div>
        );
    }
}

export default App;
