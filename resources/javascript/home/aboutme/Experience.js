import React from "react";
import {Date, Skills, Title} from "./Placeholder";


export let Experience = () => {
    return (
        <div className="mb-3">
            <div className="fw-semibold">
                <Title/>
            </div>
            <div className="text-muted mb-2">
                <Date/>
            </div>
            <div>
                <Skills/>
            </div>
        </div>
    );
}