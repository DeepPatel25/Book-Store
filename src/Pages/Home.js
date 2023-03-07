import React, { Component } from "react";
import UserList from '../component/UserList'
import Hoc from '../component/Hoc'
// import Title from "../component/Title"
// import Counter from "../component/Counter";

class Home extends Component {

    render() {
        const userData = [
            { ID: 1, Name: 'Deep' },
            { ID: 2, Name: 'Vishal' },
            { ID: 3, Name: 'Shyam' },
        ]

        const Users = Hoc(UserList, userData)
        return <Users />
    }

    /* constructor() {
        super()
        this.state = {
            title: 'Deep',
            description: "It's nice to meet you."
        }
    } */

    // Home is a Page where you can see all features.
    /* render() {
        return (
            <>
                <h1>This is Home page.</h1>
            </>
        )

        return (
            <>
                <Title title={this.state.title} description={this.state.description} />
                <Counter />
            </>
        ); 
    } */
}

export default Home