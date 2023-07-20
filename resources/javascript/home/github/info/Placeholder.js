import React from "react";
import '/resources/scss/styles.scss'


export let Placeholder = () => {
    const height = '1.5rem';

    const style1 = {
        color: 'rgba(45,186,78,0.2)',
        height: height,
    }

    const style2 = {
        color: 'rgba(250,251,252,0.2)',
        height: height,
    }

    return (
        <div className="placeholder-glow mb-5 d-flex justify-content-around">
            <span className="placeholder col-3 rounded-pill" style={style1}></span>
            <span className="placeholder col-8 rounded-pill" style={style2}></span>
        </div>
    );
}
