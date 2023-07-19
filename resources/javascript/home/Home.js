import React from "react";
import {Hero} from "./Hero";
import {Header} from "./Header";
import {Github} from "./Github";


export let Home = () => {
    return (
        <div>
            <Header/>
            <Hero/>
            <Github/>
        </div>
    );
}