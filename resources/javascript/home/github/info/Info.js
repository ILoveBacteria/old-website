import React from "react";
import '/resources/scss/styles.scss'
import {Profile} from "./Profile";
import {Placeholder} from "./Placeholder";


export let Info = () => {
    let style = {
        backgroundColor: '#2b3137',
    }

    return (
        <div style={style} className="p-4 rounded-top-5">
            <Profile/>
            <Placeholder/>
            <Placeholder/>
            <Placeholder/>
            <Placeholder/>
        </div>
    );
}
