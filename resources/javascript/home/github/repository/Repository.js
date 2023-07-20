import React from "react";
import '/resources/scss/styles.scss'


export let Repository = () => {
    const style = {
        backgroundColor: '#2b3137',
        width: '30rem',
    }

    return (
        <div className="p-3 rounded-4 mb-3" style={style}>
            <div className="fw-semibold fs-4" style={{color: 'rgba(250,251,252,0.7)'}}>Primary card title</div>
            <div style={{color: 'rgba(250,251,252,0.6)'}}>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
            </div>
        </div>
    );
}
