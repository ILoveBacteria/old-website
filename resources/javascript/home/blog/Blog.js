import React from 'react';
import '/resources/scss/styles.scss'
import {LatestBlogs} from "./LatestBlogs";


export let Blog = () => {
    return (
        <section id="blog" className="mb-5">
            <div className="container">
                <h2 className="fw-bold" style={{color: '#00ADB5'}}>Blog</h2>
                <p style={{maxWidth: '70ch'}} className="mb-3">{description}</p>
                <a className="icon-link icon-link-hover mb-4" href="#">Go to blog page{arrowRight}</a>
                <LatestBlogs/>
            </div>
        </section>
    );
}


const description = "Here, I will be sharing helpful articles and resources about programming that " +
    "I come across on the internet. As a passionate programmer myself, I believe in the power of knowledge " +
    "sharing and helping others in their programming journey.";

const arrowRight = (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right"
         viewBox="0 0 16 16">
        <path fillRule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
    </svg>
);
