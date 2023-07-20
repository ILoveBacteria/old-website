import React from "react";
import '/resources/scss/styles.scss'


export let Profile = () => {
    let idStyle = {
        color: '#fafbfc',
        backgroundColor: 'rgba(250,251,252,0.1)'
    }

    return (
        <div className="d-flex justify-content-start align-items-center mb-5">
            <img src="https://avatars.githubusercontent.com/u/92675206?v=4" alt="ILoveBacteria avatar"
                 className="rounded-circle me-3" style={{width: '5rem'}}/>
            <div style={idStyle} className="fs-5 fw-semibold px-3 py-1 rounded-pill">ILoveBacteria</div>
        </div>
    );
}
