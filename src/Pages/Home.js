import React, { Component } from "react";
import Title from "../component/Title";

class Home extends Component {
    render() {
        return(
            <>
                <h1> This is Class Component </h1>
                <Title titleText="I am Title."/>
            </>
        );
    }
}

export default Home