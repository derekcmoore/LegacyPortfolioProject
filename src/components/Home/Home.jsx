import React, { Component } from "react";
import "./Home.scss";
export default class Home extends Component {
    render() {
        return (
            <div className="home">
                <div className="overlay"></div>
                <div className="section-margin">
                    <h1>
                        I want to <span className="blue">help improve</span>
                        <br />
                        the lives of
                        <br />
                        others &nbsp;
                        <span className="underline">through software</span>
                    </h1>
                </div>
            </div>
        );
    }
}
