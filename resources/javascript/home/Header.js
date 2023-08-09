import React from "react";
import '/resources/scss/styles.scss'


export let Header = () => {
    let style = {
        backgroundColor: "rgba(255,255,255,0.1)",
        backdropFilter: "blur(10px)",
    }

    return (
        <header>
            <nav id="navbar" className="navbar navbar-expand fixed-top p-3" style={style}>
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#hero">Contact-Info</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#about">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#blog">Blog</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#github">Github</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
