import React from "react";
import '/resources/scss/styles.scss'
import {Profile} from "./Profile";
import {Placeholder} from "./Placeholder";


export let Info = () => {
    let style = {
        backgroundColor: '#2b3137',
        width: '30rem',
    }

    return (
        <div style={style} className="p-4 rounded-top-5">
            <Profile/>
            {/*<a className="icon-link icon-link-hover text-end" href="#">Icon link{arrowRight}</a>*/}
            <Placeholder/>
            <Placeholder/>
            <Placeholder/>
            <Placeholder/>
        </div>
    );
}


const arrowRight = (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right"
         viewBox="0 0 16 16">
        <path fillRule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
    </svg>
);
