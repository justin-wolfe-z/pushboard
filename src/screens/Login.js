import React, { Component } from 'react'
import {connect} from 'react-redux'
import ButtonBar from '../components/ButtonBar'
import AppButton from '../components/AppButton'
import {clickButton,loginThunk} from '../actions/index'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {email:'', key:''};
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
  	this.setState({[event.target.name]: event.target.value})  
  }
	render() {
		return (
			<div className='login'>
				<div>Tap</div>
				<input type='text' name='email' placeholder='email' value={this.state.email} onChange={this.handleChange}/>
				<br/>
				<input type='text' name='key' placeholder='api key' value={this.state.key} onChange={this.handleChange}/>
				<br/>
				<div name='Login' onClick={() => this.props.login(this.state)}>Login</div>
				<div name='Signup' onClick={() => this.props.signup(this.state)}>Signup</div>
			</div>
		)
	}
}

const mapStateToProps = state => {
  return {
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: (state) => {
    	console.log("login")
    	console.log(state)
    },
    signup: (state) => {
    	console.log("signup")
    	console.log(state)
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)
