import React, { Component } from 'react'
import {connect} from 'react-redux'

class Login extends Component {
	render() {
		return (
			<div className='login'>
				<div>Pushboard</div>
				<input type='text' placeholder='email'/>
				<input type='text' placeholder='api_key'/>
				<div>Connect</div>
			</div>
		)
	}
}

export default Login