import React from "react";


export let ResumeList = (props) => {
    const Component = props.component;
    if (props.data == null) {
            return [<Component key={1} data={null}/>, <Component key={2} data={null}/>];
        }
        return props.data.map((x) => <Component key={x.id} data={x}/>);
}