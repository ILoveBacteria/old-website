import React from "react";
import {H2, H3, P} from "../../utils/tags";
import {Experience} from "./Experience";
import {Education} from "./Education";
import {License} from "./License";
import {ADDR} from "../../App";


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

    buildExperienceComponent() {
        if (this.state.experience == null) {
            return [<Experience key={1} data={null}/>, <Experience key={2} data={null}/>];
        }
        return this.state.experience.map((x) => <Experience key={x.id} data={x}/>);
    }

    buildEducationComponent() {
        if (this.state.education == null) {
            return [<Education key={1} data={null}/>, <Education key={2} data={null}/>];
        }
        return this.state.education.map((x) => <Education key={x.id} data={x}/>);
    }

    buildCertificateComponent() {
        if (this.state.certificate == null) {
            return [<License key={1} data={null}/>, <License key={2} data={null}/>];
        }
        return this.state.certificate.map((x) => <License key={x.id} data={x}/>);
    }

    render() {
        const educationComponentList = this.buildEducationComponent();
        const experienceComponentList = this.buildExperienceComponent();
        const certificateComponentList = this.buildCertificateComponent();

        return (
            <section id="about" className="mb-5 container">
                <H2>About Me</H2>
                <P>
                    I am a computer engineering student at Shahid Beheshti University. I am interested in
                    Back-end and Front-end development. currently improving myself in programming. I like to experience
                    everything in computer and programming and learn new thing.
                </P>
                <H3>Experience</H3>
                {experienceComponentList}
                <H3>Education</H3>
                {educationComponentList}
                <H3>Licenses & certifications</H3>
                {certificateComponentList}
            </section>
        );
    }
}