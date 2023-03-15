import React, { Component } from 'react'
import LoginForm from './component/LoginForm'

export default class App extends Component {
	// App is a file which can store all our js files links and reference to them.

	/*  Constructor for changing Home and About pages.
	constructor(props) {
		super(props)

		this.state = {
			isHome: false,
			isAbout: false
		}

		this.changeHome = this.changeHome.bind(this)
		this.changeAbout = this.changeAbout.bind(this)
	}

	changeHome() {
		this.setState({
			isHome: true
		})
	}

	changeAbout() {
		this.setState({
			isAbout: true
		})
	} */

	render() {

		// Day 14
		return <LoginForm />

		// Day 13 
		// return <CounterHook />

		// Day 11 Task 1
		// return <Users />

		// Day 12 Task 2
		// return <Post />

		// Day 10
		// return (
		// 	<UserProvider value="Deep">
		// 		<ComponentA />
		// 	</UserProvider>
		// )

		// Day 9 Task 2
		// return <RenderPropsComponent render={() => {
		// 	return (
		// 		<h3>I am Coming from render props</h3>
		// 	)
		// }} />

		// Day 9
		// return <Home />

		// Day 8 
		// Mounting and Updating Lifecycle
		// return <LifeCycleA />

		// Refs/ Refs With Class Components
		// return <InputRef />
		// return <FocusInput />

		// Day 7 
		// return <LoginForm />

		// return <List />

		// return this.state.isHome ? (
		// 	<Home />
		// ) : this.state.isAbout ? (
		// 	<About />
		// ) : (
		// 	<div>
		// 		<button onClick={this.changeHome}> Home </button>
		// 		<button onClick={this.changeAbout}> About</button>
		// 	</div>
		// )

		/* 
		
		Approach using if-else with support of message variable.

		let pageRender
		if (this.state.isHome) {
			pageRender = <Home />
		} else if (this.state.isAbout) {
			pageRender = <About />
		} else {
			pageRender = <div>
				<button onClick={this.changeHome}> Home </button>
				<button onClick={this.changeAbout}> About</button>
			</div>
		}

		return pageRender */
	}
}

