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
    }

    changeState = () => {
        this.setState({ hash: window.location.hash });
        var elmnt = document.getElementById(window.location.hash);
        elmnt.scrollIntoView();
    };

    componentWillUnmount() {
        // Make sure to remove the DOM listener when the component is unmounted.
        window.removeEventListener("hashchange", this.changeState);
    }

    render() {
        return (
            <Navbar
                collapseOnSelect
                expand="lg"
                className="flex-column minimized-nav"
                fixed="top"
            >
                <h2 className="center-title">Derek Moore</h2>
                <Navbar.Toggle
                    className="test"
                    aria-controls="responsive-navbar-nav"
                />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav
                        className="mr-auto flex-column side-nav"
                        activeKey={this.state.hash}
                    >
                        <div className="nav-title">
                            <h2 className="ml-4 mt-3">Derek</h2>
                            <h2 className="ml-4 mt-1">Moore</h2>
                        </div>
                        <Nav.Link className="nav-item" href="#about">
                            <FaUserAlt className="mr-4 ml-2 nav-user-icon" />
                            About
                        </Nav.Link>
                        <Nav.Link className="nav-item" href="#skills">
                            <FaRegChartBar className="mr-4 ml-2 nav-skill-icon" />
                            Skills
                        </Nav.Link>
                        <Nav.Link className="nav-item" href="#projects">
                            <FaFolder className="mr-4 ml-2 nav-project-icon" />
                            Projects
                        </Nav.Link>
                        <Nav.Link className="nav-item" href="#education">
                            <FaGraduationCap className="mr-4 ml-2 nav-school-icon" />
                            Education
                        </Nav.Link>
                        <Nav.Link className="nav-item" href="#contact">
                            <FaEnvelope className="mr-4 ml-2 nav-contact-icon" />
                            Contact
                        </Nav.Link>
                        <Nav.Link className="nav-item">
                            <FaFileAlt className="mr-4 ml-2 nav-resume-icon" />
                            Resume
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
