import React, { Component } from "react";
import Navigation from "./components/Navigation/Navigation";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import "./App.scss";
import $ from "jquery";
import jQuery from "jquery";

class App extends Component {
    getScrollLocation() {
        jQuery(function () {
            var sections = {};

            $(".section").each(function () {
                var hash = $(this).data("hash"),
                    topOffset = $(this).offset().top;
                sections[topOffset] = hash;
            });

            $(window).on("scroll", function () {
                var scrollTop = $(window).scrollTop();
                setHash(scrollTop);
            });

            function setHash(st) {
                var hash = "";
                for (var section in sections) {
                    if (section < st + $(window).height() / 4)
                        hash = sections[section];
                }
                if ("#" + hash !== window.location.hash) {
                    if (!hash) {
                        let loc = window.location;
                        window.history.pushState(
                            "",
                            document.title,
                            loc.pathname + loc.search
                        );
                    } else {
                        window.location.hash = hash;
                    }
                }
            }
        });
    }

    render() {
        this.getScrollLocation();
        return (
            <div id="root">
                <Navigation />
                <div className="content">
                    <section id="#home" className="section full-screen">
                        <Home />
                    </section>
                    <section
                        id="#about"
                        className="section full-screen"
                        data-hash="about"
                    >
                        <About />
                    </section>
                    <section
                        id="#skills"
                        className="section full-screen"
                        data-hash="skills"
                    >
                        <Skills />
                    </section>
                    <section
                        id="#projects"
                        className="section full-screen"
                        data-hash="projects"
                    >
                        <Projects />
                    </section>
                    <section
                        id="#education"
                        className="section full-screen"
                        data-hash="education"
                    >
                        <Education />
                    </section>
                    <section
                        id="#contact"
                        className="section full-screen"
                        data-hash="contact"
                    >
                        <Contact />
                    </section>
                </div>
            </div>
        );
    }
}

export default App;
