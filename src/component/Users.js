import React, { Component } from 'react'
import axios from 'axios'
import UserDetail from './UserDetail'

export default class Users extends Component {

    constructor(props) {
        super(props)

        this.state = {
            users: []
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(Response => {
                this.setState({
                    users: Response.data
                })
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        const { users } = this.state
        return (
            <>
                {
                    users.map((user) => <UserDetail user={user} key={user.id + user.username} />)
                }
            </>
        )
    }
}
