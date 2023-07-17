import React from "react";
import ReactDOM from "react-dom";
import {Home} from "./home/Home";
import '../scss/styles.scss'
import * as bootstrap from 'bootstrap'


let App = () => {
    return (
        <div className="container">
            <Home/>
        </div>
    );
}

ReactDOM.render(<App/>, document.getElementById('app'));