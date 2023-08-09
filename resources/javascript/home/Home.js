import React from "react";
import {Hero} from "./hero/Hero";
import {Header} from "./Header";
import {Github} from "./github/Github";
import {Blog} from "./blog/Blog";
import {AboutMe} from "./aboutme/AboutMe";
import {Footer} from "./Footer";


export let Home = () => {
    return (
        <div data-bs-spy="scroll" data-bs-target="#navbar">
            <Header/>
            <Hero/>
            <AboutMe/>
            <Blog/>
            <Github/>
            <Footer/>
        </div>
    );
}