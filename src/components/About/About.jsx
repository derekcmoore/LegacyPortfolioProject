import React, { Component } from "react";
import Title from "../Title/Title";
import "./About.scss";
export default class About extends Component {
    render() {
        return (
            <div className="info">
                <Title name="About" backgroundcolor="#55aadd" />
                <div></div>
            </div>
        );
    }
}
