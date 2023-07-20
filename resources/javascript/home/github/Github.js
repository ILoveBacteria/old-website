import React from "react";
import {Repository} from "./repository/Repository";
import '/resources/scss/styles.scss'
import {Info} from "./info/Info";


export let Github = () => {
    let style = {
        backgroundColor: '#24292e',
    }

    return (
        <section>
            <div style={style} className="d-flex justify-content-around px-4 pt-4">
                <div>
                    <Info/>
                </div>
                <div>
                    <Repository/>
                    <Repository/>
                    <Repository/>
                    <Repository/>
                </div>
            </div>
        </section>
    );
}
