import React from "react";
import '/resources/scss/styles.scss'
import {ContactIcon} from "./ContactIcon";


export let Hero = () => {
    return (
        <div className="vh-100 d-flex align-items-center mb-5" id="hero">
            <div className="container">
                <h1 className="fw-bold">MohammadMoein Arabi</h1>
                <div className="text-muted mb-4">Computer Engineering student at Shahid Beheshti University</div>
                <ContactIcon/>
            </div>
        </div>
    );
}