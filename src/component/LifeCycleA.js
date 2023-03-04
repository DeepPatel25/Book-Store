import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends Component {

    // Day 8 Mounting
    constructor(props) {
        super(props)

        this.state = {
            name: 'Deep'
        }
        console.log('LifecycleA Constructor')
    }

    // Mounting and Updating Lifecycle
    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleA getDerivedStateFromProps')
        return null
    }

    // Updating Lifecycle    
    shouldComponentUpdate() {
        console.log('LifeCycleA shouldComponentUpdate')
        return true
    }

    componentDidMount() {
        console.log('LifeCycleA ComponentdidMount')
    }

    // Updating Lifecycle    
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifeCycleA getSnapshotBeforeUpdate')
        return null
    }

    // Updating Lifecycle
    componentDidUpdate() {
        console.log('LifecycleA componentDidUpdate')
    }

    changeState = () => {
        this.setState({
            name: 'Deep Patel'
        })
    }

    // Mounting and Updating Lifecycle
    render() {
        console.log('LifeCycleA render')
        return (
            <div>
                <p>LifeCycleA</p>
                <button onClick={this.changeState}>Change State</button>
                <LifeCycleB />
            </div>
        )
    }
}

export default LifeCycleA
