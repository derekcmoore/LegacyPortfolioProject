import React, { Component } from "react";
import Title from "../../components/Title/Title";
import JobEntry from "../../components/JobEntry/JobEntry";
import "./Experience.scss";

export default class Experience extends Component {
    nelnet() {
        return ["Nelnet", "May 2020", "Present"];
    }
    render() {
        return (
            <div className="info">
                <Title name="Experience" backgroundcolor=" #dda755" />
                <div className="text">
                    <JobEntry company={this.nelnet()} />
                </div>
            </div>
        );
    }
}
