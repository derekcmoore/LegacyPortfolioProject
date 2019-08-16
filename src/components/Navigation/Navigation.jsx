import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./Navigation.scss";
import {
  FaUserAlt,
  FaFolder,
  FaRegChartBar,
  FaGraduationCap,
  FaFileAlt,
  FaEnvelope
} from "react-icons/fa";
export default class Navigation extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" className="flex-column">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto flex-column side-nav">
            <div className="nav-title" href="#home">
              <h2 className="ml-4 mt-3">Derek</h2>
              <h2 className="ml-4 mt-1">Moore</h2>
            </div>
            <Nav.Link className="nav-item" href="#features">
              <FaUserAlt className="mr-4 ml-2 nav-user-icon" />
              About
            </Nav.Link>
            <Nav.Link className="nav-item" href="#pricing">
              <FaRegChartBar className="mr-4 ml-2 nav-skill-icon" />
              Skills
            </Nav.Link>
            <Nav.Link className="nav-item" href="#features">
              <FaFolder className="mr-4 ml-2 nav-project-icon" />
              Projects
            </Nav.Link>
            <Nav.Link className="nav-item" href="#pricing">
              <FaGraduationCap className="mr-4 ml-2 nav-school-icon" />
              Education
            </Nav.Link>
            <Nav.Link className="nav-item" href="#pricing">
              <FaEnvelope className="mr-4 ml-2 nav-contact-icon" />
              Contact
            </Nav.Link>
            <Nav.Link className="nav-item" href="#pricing">
              <FaFileAlt className="mr-4 ml-2 nav-resume-icon" />
              Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
