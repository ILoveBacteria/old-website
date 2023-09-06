import React from "react";
import {Resume} from "./Resume";


export let ResumeList = (props) => {
    if (props.data == null) {
            return [<Resume key={1} data={null}/>, <Resume key={2} data={null}/>];
        }
        return props.data.map((x) => <Resume key={x.id} data={x}/>);
}