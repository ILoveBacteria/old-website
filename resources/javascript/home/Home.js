import React from "react";
import {Hero} from "./hero/Hero";
import {Header} from "./Header";
import {Github} from "./github/Github";
import {Blog} from "./blog/Blog";
import {AboutMe} from "./aboutme/AboutMe";


export let Home = () => {
    return (
        <div>
            <Header/>
            <Hero/>
            <AboutMe/>
            <Blog/>
            <Github/>
        </div>
    );
}