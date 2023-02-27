import React, { Component } from 'react'
import About from './Pages/About'
import Home from './Pages/Home'
import List from './component/List'
import Title from './component/Title'

export default class App extends Component {
	// App is a file which can store all our js files links and reference to them.

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
	}

	render() {

		return <Title />

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

