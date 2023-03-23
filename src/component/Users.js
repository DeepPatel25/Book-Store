import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Users() {
    const [user, setUser] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(Response => {
                setUser(Response.data)
            })
            .catch(error => {
                console.log(error)
            })
    })

    const userData = user.map(post => <p>{post.name}</p>)

    return (
        <div>
            {userData}
        </div>
    )
}

export default Users


/*
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
} */