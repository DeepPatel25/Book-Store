import React from "react";

const Title = (props) => {
    const {title, description} = props;

    return(
        <div>
            <p> This is {title} </p>
            <p> {description} </p>
        </div>
    );
}

export default Title;