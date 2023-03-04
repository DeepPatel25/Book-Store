import React, { Component } from 'react'

class LifeCycleB extends Component {

    // Day 8 Mounting 
    constructor(props) {
        super(props)

        this.state = {
            name: 'Deep'
        }
        console.log('LifeCycleB Constructor')
    }

    // Mounting and Updating Lifecycle
    static getDerivedStateFromProps(props, state) {
        console.log('LifeCycleB getDerivedStateFromProps')
        return null
    }

    // Updating Lifecycle
    shouldComponentUpdate() {
        console.log('LifeCycleB shouldComponentUpdate')
        return true
    }

    // Updating Lifecycle
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifeCycleB getSnapshotBeforeUpdate')
        return null
    }

    // Updating Lifecycle
    componentDidUpdate() {
        console.log('LifecycleB componentDidUpdate')
    }

    componentDidMount() {
        console.log('LifeCycleB ComponentdidMount')
    }

    // Mounting & Updating Lifecycle
    render() {
        console.log('LifeCycleB render')
        return (
            <div>
                <p>LifeCycleB</p>
            </div>
        )
    }
}

export default LifeCycleB
