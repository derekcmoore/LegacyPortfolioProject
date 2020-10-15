import React, { Component } from "react";
import "./Home.scss";
export default class Home extends Component {
    render() {
        return (
            <div className="home">
                <div className="overlay"></div>
                <div className="info">
                    <h1>
                        I want to <span className="blue">help improve</span>
                        <br />
                        the lives of
                        <br />
                        <span className="underline">
                            others through software
                        </span>
                    </h1>
                </div>
            </div>
        );
    }
}
