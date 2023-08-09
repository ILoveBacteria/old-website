import React from "react";
import {H2, H3, P} from "../../utils/tags";
import {Experience} from "./Experience";
import {Education} from "./Education";
import {License} from "./License";


export let AboutMe = () => {
    return (
        <section className="mb-5 container">
            <H2>About Me</H2>
            <P>
                I am a computer engineering student at Shahid Beheshti University. I am interested in
                Back-end and Front-end development. currently improving myself in programming. I like to experience
                everything in computer and programming and learn new thing.
            </P>
            <H3>Experience</H3>
            <Experience/>
            <Experience/>
            <H3>Education</H3>
            <Education/>
            <Education/>
            <H3>Licenses & certifications</H3>
            <License/>
            <License/>
        </section>
    );
}