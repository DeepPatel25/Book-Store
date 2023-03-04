import React from 'react'
import './myTitle.css'

function Title({ obj, key }) {
    return (
        <div>
            <h2 className='heading'> I am {obj.title} desc is {obj.description} </h2>
        </div>
    )
}

export default React.memo(Title)

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