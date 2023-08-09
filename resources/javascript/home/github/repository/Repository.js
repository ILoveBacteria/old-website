import React from "react";
import '/resources/scss/styles.scss'


export let Repository = () => {
    const height = '1.5rem';
    const style = {
        '--bs-border-color': 'rgb(68, 76, 86)',
        width: '30rem',
    }

    return (
        <div className="p-3 rounded-4 mb-3 border border-1" style={style}>
            <div className="fw-semibold fs-4" style={{color: 'rgb(173, 186, 199)'}}>
                {/*Just remove this placeholder*/}
                <div className="placeholder-glow">
                    <span className="placeholder col-5 rounded-pill" style={{height: height, color: 'rgba(173,186,199,0.5)'}}></span>
                </div>
            </div>
            <div style={{color: 'rgb(118, 131, 144)'}}>
                {/*Just remove this placeholder*/}
                <div className="placeholder-glow">
                    <span className="placeholder col-7 rounded-pill" style={{height: height, color: 'rgba(118,131,144,0.5)'}}></span>
                </div>
            </div>
        </div>
    );
}
