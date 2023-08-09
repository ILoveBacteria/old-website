import React from "react";
import '/resources/scss/styles.scss'


export let LatestBlogs = () => {
    const style = {
        '--bs-border-color': 'rgba(0,173,181,0.1)',
    }

    return (
        <div className="border border-3 rounded-4 p-4" style={style}>
            <h3 style={{color: '#00ADB5'}} className="fw-bold">Latest Blogs</h3>
            <div className="placeholder-glow opacity-50">
                <span className="placeholder rounded-pill" style={{width: '30ch'}}></span>
            </div>
        </div>
    );
}
