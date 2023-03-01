import React, { Component } from 'react'
import './myStyle.css'

export default class LoginForm extends Component {

	constructor(props) {
		super(props)

		this.state = {
			username: '',
			email: '',
			password: ''
		}
	}

	handleUsernameChange = (event) => {
		this.setState({
			username: event.target.value
		})
	}

	handleEmailChange = (event) => {
		this.setState({
			email: event.target.value
		})
	}

	handlePasswordChange = event => {
		this.setState({
			password: event.target.value
		})
	}

	handleSubmit = event => {
		alert(`${this.state.username} ${this.state.email} ${this.state.password}`)
		event.preventDefault()
	}

	render() {
		const { username, email, password } = this.state
		return (
			<div className='formStyle'>
				<form onSubmit={this.handleSubmit}>
					<div>
						<label> Username :- </label>
						<input type='text' value={username} onChange={this.handleUsernameChange} />
					</div> <br />
					<div>
						<label> Email :- </label>
						<input type='email' value={email} onChange={this.handleEmailChange} />
					</div> <br />
					<div>
						<label> Password :- </label>
						<input type='password' value={password} onChange={this.handlePasswordChange} />
					</div>
					<button type='submit' >Submit</button>
				</form>
			</div>
		)
	}
}
