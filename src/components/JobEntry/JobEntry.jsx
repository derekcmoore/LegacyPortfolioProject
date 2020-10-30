import React, { Component } from "react";
import "./JobEntry.scss";

export default class JobEntry extends Component {
    company() {
        return {
            name: this.props.company[0],
            startDate: this.props.company[1],
            endDate: this.props.company[2],
        };
    }
    render() {
        return (
            <div className="entry">
                <h4>{this.company().name}</h4>
                <span className="employment-time">
                    {this.company().startDate} - {this.company().endDate}
                </span>
            </div>
        );
    }
}
