import React, { Component } from "react";
import Title from "../../components/Title/Title";
import "./About.scss";
export default class About extends Component {
    render() {
        return (
            <div className="info">
                <Title name="About" backgroundcolor="#55aadd" />
                <div className="text">
                    <blockquote>
                        <h2>
                            Developer with experience in full-stack application
                            development with a passion for thoughtful UI design
                            and usability.
                        </h2>
                    </blockquote>
                    <p>
                        Through my internship opportunities and side projects I
                        have developed a passion for Application Development and
                        Software Engineering. From learning Angular to
                        developing a full stack application using Ruby on Rails
                        and Vue, I always want to stay ahead of the game by
                        learning new frameworks and technolgies in my free time.
                    </p>
                    <p>
                        I am always striving to be the best version of myself
                        through hard work and self-motivation. I hope to have to
                        have an impact on those around me by developing a
                        healthy work culture through my positive outlook and
                        work demeanor. I want to learn from and help my
                        teammates grow all while developing meaningful software.
                    </p>
                    <p>
                        <b>Current Focus:</b>{" "}
                        <span className="focus-area">Ruby on Rails</span>
                        {" // "}
                        <span className="focus-area">Vue.js</span>
                        {" // "}
                        <span className="focus-area">Software Development</span>
                    </p>
                </div>
            </div>
        );
    }
}
