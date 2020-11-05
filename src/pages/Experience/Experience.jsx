import React, { Component } from "react";
import Title from "../../components/Title/Title";
import JobEntry from "../../components/JobEntry/JobEntry";
import "./Experience.scss";

export default class Experience extends Component {
    nelnet() {
        return [
            "nelnet",
            "May 2020",
            "Present",
            [
                "Rewrote an internal admin tool using Ruby on Rails and Vue.js,increasing end-user productivity by reworking the UI and back-end functionality",
                "Aided in the development of production and UAT environments within AWS,using services such as ParameterStore, ECS, and CodePipeline to ensure proper functionality",
                "Started and continue to work in a remote work environment, which enabled improvement of fluency in online team interaction",
                "Led weekly meetings and discussions relating to progress and future product development of my application",
                "Kept continuous communication with product users to ensure feedback became properly implemented during development",
            ],
            ["Software Engineering Intern"]
        ];
    }

    dpl() {
        return [
            "dont_panic_labs",
            "May 2019",
            "August 2019",
            [
                "Developed a single solution using IDesign architecture principles",
                "Created a project management tool from the beginning using Angular and ASP.NET Core",
                "Wrote over 100 unit tests for API implementations using Moq",
                "Implemented continuous integration and continuous deployment using Azure DevOps pipelines",
                "Utilized Azure hosting for frontend and backend solutions",
            ],
            [
                "Software Engineering Intern at PaymentSpring",
                "IT Pathways Intern at PaymentSpring",
            ],
        ];
    }

    render() {
        return (
            <div className="info">
                <Title name="Experience" backgroundcolor=" #dda755" />
                <div className="text">
                    <JobEntry company={this.nelnet()} />
                    <br />
                    <br />
                    <br />
                    <JobEntry company={this.dpl()} />
                </div>
            </div>
        );
    }
}
