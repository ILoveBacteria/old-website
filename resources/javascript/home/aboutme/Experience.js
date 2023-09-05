import React from "react";
import {Date, Skills, Title} from "./Placeholder";


export let Experience = (props) => {
    if (props.data == null) {
        return placeholder;
    }
    return (
        <div className="mb-3">
            <div className="fw-semibold">{props.data.title}</div>
            <div className="text-muted mb-2">{props.data.date}</div>
            <div>{props.data.skills}</div>
        </div>
    );
}

const placeholder = (
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