import React from "react";
import {H2, H3, P} from "../../utils/tags";
import {ADDR} from "../../App";
import {ResumeList} from "./ResumeList";


export class AboutMe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {education: null, experience: null, certificate: null};
    }

    async fetchData(model) {
        const response = await fetch(`${ADDR}/website/api/${model}`);
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
                <H2>About Me</H2>
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