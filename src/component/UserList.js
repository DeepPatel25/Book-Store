import React, { Component } from 'react'

class UserList extends Component {
    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Name</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.data.map(user => (
                            <tr key={user.ID}>
                                <td>{user.ID}</td>
                                <td>{user.Name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default UserList