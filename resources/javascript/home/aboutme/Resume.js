import React from "react";
import {Date, Skills, Subtitle, Title} from "./Placeholder";


export let Resume = (props) => {
    if (props.data == null) {
        return placeholder;
    }
    return (
        <div className="mb-3 d-flex">
            <img src={props.data.company.logo} style={{width: '2.7rem', height: '2.7rem'}}
                 className="me-3" alt="Company Logo"/>
            <div>
                <div className="fw-semibold mb-1">{props.data.title}</div>
                <div>{props.data.subtitle}</div>
                <div className="text-muted mb-2" style={{fontSize: '0.9rem'}}>{props.data.date}</div>
                <div>{props.data.skills}</div>
                {props.data.link != null && <link href={props.data.link} target="_blank" />}
            </div>
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