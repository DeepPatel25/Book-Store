import React from "react";

const Title = (props) => {
    const { title, description } = props;

    // Title is a Component where it shows the title and description.
    return (
        <div>
            <p> This is {title} </p>
            <p> {description} </p>
        </div>
    );
}

export default Title;