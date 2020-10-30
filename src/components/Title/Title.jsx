import React, { Component } from "react";
import "./Title.scss";
export default class Title extends Component {
  render() {
    return (
        <div
            className="title"
            style={{ backgroundColor: this.props.backgroundcolor }}
        >
            <h3>{this.props.name}</h3>
        </div>
    );
  }
}
