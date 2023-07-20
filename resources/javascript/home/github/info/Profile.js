import React from "react";
import '/resources/scss/styles.scss'


export let Profile = () => {
    let idStyle = {
        color: '#fafbfc',
        opacity: '80%',
    }

    return (
        <div className="d-flex justify-content-start align-items-center mb-5">
            <img src="https://avatars.githubusercontent.com/u/92675206?v=4" alt="ILoveBacteria avatar"
                 className="rounded-circle me-3" style={{width: '5rem'}}/>
            <div style={{backgroundColor: 'rgba(250,251,252,0.1)'}} className="px-3 py-1 rounded-pill">
                <span className="fs-5 fw-semibold" style={idStyle}>ILoveBacteria</span>
            </div>
        </div>
    );
}
