import React from "react";
import {Hero} from "./hero/Hero";
import {Header} from "./Header";
import {Github} from "./github/Github";
import {Blog} from "./blog/Blog";


export let Home = () => {
    return (
        <div>
            <Header/>
            <Hero/>
            <Blog/>
            <Github/>
        </div>
    );
}