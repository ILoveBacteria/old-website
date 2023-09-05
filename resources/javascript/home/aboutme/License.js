import React from "react";
import {Skills, Subtitle, Title, Date} from "./Placeholder";


export let License = (props) => {
    if (props.data == null) {
        return placeholder;
    }
    return (
        <div className="mb-3">
            <div className="fw-semibold">{props.data.title}</div>
            <div>{props.data.subtitle}</div>
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
        <div>
            <Subtitle/>
        </div>
        <div className="text-muted mb-2">
            <Date/>
        </div>
        <div>
            <Skills/>
        </div>
    </div>
);