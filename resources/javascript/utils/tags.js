import React from "react";


export let H2 = (props) => {
    return <h2 className="fw-bold mb-3" style={{color: '#00ADB5'}}>{props.children}</h2>
}

export let H2WithNoMargin = (props) => {
    return <h2 className="fw-bold m-0" style={{color: '#00ADB5'}}>{props.children}</h2>
}

export let H3 = (props) => {
    return <h3 className="fw-semibold mb-3" style={{color: '#00ADB5'}}>{props.children}</h3>
}

export let P = (props) => {
    return <p style={{maxWidth: '70ch'}}>{props.children}</p>
}