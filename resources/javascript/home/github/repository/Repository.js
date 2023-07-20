import React from "react";
import '/resources/scss/styles.scss'


export let Repository = () => {
    const style = {
        '--bs-border-color': 'rgb(68, 76, 86)',
        width: '30rem',
    }

    return (
        <div className="p-3 rounded-4 mb-3 border border-1" style={style}>
            <div className="fw-semibold fs-4" style={{color: 'rgb(173, 186, 199)'}}>Primary card title</div>
            <div style={{color: 'rgb(118, 131, 144)'}}>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
            </div>
        </div>
    );
}
