import React from "react";
import '/resources/scss/styles.scss'


export let LatestBlogs = () => {
    const style = {
        '--bs-border-color': 'rgba(0,173,181,0.1)',
    }

    return (
        <div className="border border-3 rounded-4 p-4" style={style}>
            <h3 style={{color: '#00ADB5'}} className="fw-bold">Latest Blogs</h3>
            <div className="card" style={{width: '18rem'}}>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                        the card's content.</p>
                    <a href="#" className="card-link">Card link</a>
                </div>
            </div>
        </div>
    );
}
