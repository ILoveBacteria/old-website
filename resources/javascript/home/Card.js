import React from "react";
import '/resources/scss/styles.scss'


export let Card = () => {
    const [hover, setHover] = React.useState(false);

    let arrowRight = (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right"
             viewBox="0 0 16 16">
            <path fillRule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
        </svg>
    );

    let style = {
        maxWidth: '30rem',
        maxHeight: '6rem',
    }

    let description = (
        <p className="card-text text-truncate">
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
        </p>
    );

    return (
        <div
            className="card"
            style={style}
            onMouseEnter={() => {setHover(() => true)}}
            onMouseLeave={() => {setHover(() => false)}}
        >
            <div className="card-body">
                <h5 className="card-title">Primary card title</h5>
                {!hover && description}
                {hover && <a className="icon-link icon-link-hover text-end" href="#">Icon link{arrowRight}</a>}
            </div>
        </div>
    );
}
