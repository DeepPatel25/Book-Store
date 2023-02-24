import React, { Component } from "react";
import Title from "../component/Title"
import Counter from "../component/Counter";

class Home extends Component {
    constructor() {
        super()
        this.state = {
            title: 'Deep',
            description: "It's nice to meet you."
        }
    }

    render() {
        return (
            <>
                <Title title={this.state.title} description={this.state.description} />
                <Counter />
            </>
        );
    }
}

export default Home