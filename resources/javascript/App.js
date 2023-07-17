import React from "react";
import ReactDOM from "react-dom";
import {Home} from "./home/Home";
import '../scss/styles.scss'
import * as bootstrap from 'bootstrap'


let App = () => {
    return (
        <div>
            <Home/>
        </div>
    );
}

ReactDOM.render(<App/>, document.getElementById('app'));