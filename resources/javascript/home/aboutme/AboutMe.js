import React from "react";
import {H2WithNoMargin, H3, P} from "../../utils/tags";
import {SERVER_ADDR} from "../../App";
import {ResumeList} from "./ResumeList";


export class AboutMe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {education: null, experience: null, certificate: null};
    }

    async fetchData(model) {
        const response = await fetch(`${SERVER_ADDR}/website/api/${model}`);
        if (!response.ok) {
            throw Error(`Status not OK for ${model}`);
        }
        this.state[model] = await response.json()
        this.setState({});
    }

    componentDidMount() {
        this.fetchData("experience");
        this.fetchData("education");
        this.fetchData("certificate");
    }

    render() {
        return (
            <section id="about" className="mb-5 container">
                <div className="d-flex align-items-center mb-3">
                    <div className="me-2"><H2WithNoMargin>About Me</H2WithNoMargin></div>
                    <span className="badge rounded-pill text-bg-warning">
                        {arrowRepeat} Last sync with LinkedIn: Never
                    </span>
                </div>
                <P>
                    I am a computer engineering student at Shahid Beheshti University. I am interested in
                    Back-end and Front-end development. currently improving myself in programming. I like to experience
                    everything in computer and programming and learn new thing.
                </P>
                <H3>Experience</H3>
                <ResumeList data={this.state.experience}/>
                <H3>Education</H3>
                <ResumeList data={this.state.education}/>
                <H3>Licenses & certifications</H3>
                <ResumeList data={this.state.certificate}/>
            </section>
        );
    }
}

const arrowRepeat = (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
         className="bi bi-arrow-repeat" viewBox="0 0 16 16">
        <path
            d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/>
        <path fillRule="evenodd"
              d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/>
    </svg>
);