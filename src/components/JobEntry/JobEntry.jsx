import React, { Component } from "react";
import "./JobEntry.scss";

export default class JobEntry extends Component {
    company() {
        return {
            name: this.props.company[0],
            startDate: this.props.company[1],
            endDate: this.props.company[2],
            experiences: this.list(this.props.company[3]),
            position: this.positions(this.props.company[4]),
        };
    }

    list(experiences) {
        let rows = [];
        let name = this.props.company[0];
        for (let i = 0; i < experiences.length; i++) {
            rows.push(<li key={name + "_" + i}>{experiences[i]}</li>);
        }
        return rows;
    }

    positions(positions) {
        let list = [];
        let name = this.props.company[0];
        for (let i = 0; i < positions.length; i++) {
            list.push(
                <div key={name + "_" + i} className="position">
                    {positions[i]}
                </div>
            );
        }
        return list;
    }

    render() {
        const images = require.context("../../assets/images/companies", true);
        let img = images("./" + this.company().name + ".png");
        return (
            <div className="entry">
                <div className="job-header">
                    <img src={img} alt="" />
                    <span className="job-info">
                        <span className="employment-time">
                            {this.company().startDate} -{" "}
                            {this.company().endDate}
                        </span>
                        <span className="positions">
                            {this.positions(this.company().position)}
                        </span>
                    </span>
                </div>
                <ul>{this.company().experiences}</ul>
            </div>
        );
    }
}
