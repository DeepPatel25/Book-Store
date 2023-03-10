import React from 'react'

function UserDetail({ user }) {
    return (
        <div>
            <h2>{user.id}</h2>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <p>{user.website}</p>
            <p>{user.address.street}</p>
        </div>
    )
}

export default UserDetail
