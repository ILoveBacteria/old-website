import React from "react";


export let Icon = (props) => {
    return (
        <span className="me-3" style={ICON_STYLE} data-bs-toggle="tooltip" data-bs-placement="bottom"
              title={props.title}>
            {props.svg}
        </span>
    );
}

const ICON_COLOR = "#393E46";
const ICON_STYLE = {color: ICON_COLOR};