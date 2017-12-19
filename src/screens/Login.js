import React, { Component } from 'react'
import {connect} from 'react-redux'
import ButtonBar from '../components/ButtonBar'
import AppButton from '../components/AppButton'
import {clickButton, accountThunk} from '../actions/index'

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
				<div className='ActionButton' name='Login' onClick={() => this.props.login(this.state)}>Login</div>
				<div className='ActionButton' name='Signup' onClick={() => this.props.signup(this.state)}>Signup</div>
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
    	//maybe insert some email validation stuff before this? or into the action creator?
    	dispatch(accountThunk('login', state.email.trim() + ':' + state.key.trim()))
    },
    signup: (state) => {
    	dispatch(accountThunk('signup', state.email.trim()))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)
