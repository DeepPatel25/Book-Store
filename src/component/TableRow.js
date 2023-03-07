import React, { Component } from 'react'

export default class TableRow extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.obj.id}</td>
                <td>{this.props.obj.name}</td>
            </tr>
        )
    }
}
