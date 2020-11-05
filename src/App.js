import React, { Component } from "react";
import Navigation from "./components/Navigation/Navigation";
import About from "./pages/About/About";
import Skills from "./pages/Skills/Skills";
import Projects from "./pages/Projects/Projects";
import Experience from "./pages/Experience/Experience";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Title from "./components/Title/Title";
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
                if (window.location.hash !== "") {
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
                    <section id="about" className="section">
                        <Title name="About" backgroundcolor="#55aadd" />
                        <About />
                    </section>
                    <section id="skills" className="section full-screen">
                        <Title name="Skills" backgroundcolor="#c255dd" />
                        <Skills />
                    </section>
                    <section id="projects" className="section full-screen">
                        <Title name="Projects" backgroundcolor="#55dd89" />
                        <Projects />
                    </section>
                    <section id="experience" className="section">
                        <Title name="Experience" backgroundcolor=" #dda755" />
                        <Experience />
                    </section>
                    <section id="contact" className="section full-screen">
                        <Title name="Contact" backgroundcolor="#8f6434" />
                        <Contact />
                    </section>
                </div>
            </div>
        );
    }
}

export default App;
