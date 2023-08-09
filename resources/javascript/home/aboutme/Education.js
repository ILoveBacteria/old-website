import React from "react";
import {Date, Skills, Subtitle, Title} from "./Placeholder";


export let Education = () => {
    const height = '1.5rem';
    return (
        <div className="mb-3">
            <div className="fw-semibold">
                {/*Just remove this placeholder*/}
                <Title/>
            </div>
            <div>
                {/*Just remove this placeholder*/}
                <Subtitle/>
            </div>
            <div className="text-muted mb-2">
                {/*Just remove this placeholder*/}
                <Date/>
            </div>
            <div>
                {/*Just remove this placeholder*/}
                <Skills/>
            </div>
        </div>
    );
}