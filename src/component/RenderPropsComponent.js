import React, { Component } from 'react'

export default class RenderPropsComponent extends Component {
    render() {
        return (
            <div>
                {this.props.render()}
            </div>
        )
    }
}
