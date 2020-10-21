import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./Navigation.scss";
import {
    FaUserAlt,
    FaFolder,
    FaRegChartBar,
    FaGraduationCap,
    FaFileAlt,
    FaEnvelope,
} from "react-icons/fa";
export default class Navigation extends Component {
    constructor() {
        super();
        this.state = {
            hash: window.location.hash,
        };
    }

    componentDidMount() {
        window.addEventListener("hashchange", this.changeState, false);
        if (window.location.hash !== "") this.jumpToPage(window.location.hash.substr(1));
    }

    changeState = () => {
        this.setState({ hash: window.location.hash });
    };

    jumpToPage(hash) {
        window.location.hash = hash;
        var elmnt = document.getElementById(hash);
        elmnt.scrollIntoView();
        if (window.innerWidth <= 991) {
            window.scrollBy(0, -57);
        }
    }

    componentWillUnmount() {
        window.removeEventListener("hashchange", this.changeState);
    }

    render() {
        return (
            <Navbar collapseOnSelect expand="lg" className="flex-column">
                <div className="minimized-nav">
                    <Navbar.Toggle
                        className="hamburger-button"
                        aria-controls="responsive-navbar-nav"
                    />
                    <span className="center-title">Derek Moore</span>
                </div>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav
                        className="mr-auto flex-column side-nav"
                        activeKey={this.state.hash}
                    >
                        <div className="nav-title">
                            <h2 className="mt-3">Derek</h2>
                            <h2 className="mt-1">Moore</h2>
                        </div>
                        <Nav.Link
                            className="nav-item"
                            href="#about"
                            onClick={() => {
                                this.jumpToPage("about");
                            }}
                        >
                            <FaUserAlt className="mr-4 ml-2 nav-user-icon" />
                            About
                        </Nav.Link>
                        <Nav.Link
                            className="nav-item"
                            href="#skills"
                            onClick={() => {
                                this.jumpToPage("skills");
                            }}
                        >
                            <FaRegChartBar className="mr-4 ml-2 nav-skill-icon" />
                            Skills
                        </Nav.Link>
                        <Nav.Link
                            className="nav-item"
                            href="#projects"
                            onClick={() => {
                                this.jumpToPage("projects");
                            }}
                        >
                            <FaFolder className="mr-4 ml-2 nav-project-icon" />
                            Projects
                        </Nav.Link>
                        <Nav.Link
                            className="nav-item"
                            href="#education"
                            onClick={() => {
                                this.jumpToPage("education");
                            }}
                        >
                            <FaGraduationCap className="mr-4 ml-2 nav-school-icon" />
                            Education
                        </Nav.Link>
                        <Nav.Link
                            className="nav-item"
                            href="#contact"
                            onClick={() => {
                                this.jumpToPage("contact");
                            }}
                        >
                            <FaEnvelope className="mr-4 ml-2 nav-contact-icon" />
                            Contact
                        </Nav.Link>
                        <Nav.Link
                            className="nav-item"
                            href="https://drive.google.com/file/d/1Veu_QtFvVDHkhuQtoAa9syTdeUcSMlRS/view?usp=sharing"
                            target="_blank"
                        >
                            <FaFileAlt className="mr-4 ml-2 nav-resume-icon" />
                            Resume
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
