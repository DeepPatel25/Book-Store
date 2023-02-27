import React from 'react'

export default function Title({ obj, key }) {
    return (
        <div>
            <h2> I am {obj.title} desc is {obj.description} </h2>
        </div>
    )
}


/*
const Title = (props) => {
    const { title, description } = props;

    // Title is a Component where it shows the title and description.
    return (
        <div>
            <h1>{titleDesc}</h1>
        </div>
    );
}

export default Title;
*/