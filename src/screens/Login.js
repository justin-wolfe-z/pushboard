import React, { Component } from 'react'
import {connect} from 'react-redux'
import ButtonBar from '../components/ButtonBar'
import AppButton from '../components/AppButton'
import {clickButton, accountThunk} from '../actions/index'
import {validateEmail} from '../data/utils'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {email:'', key:'', error:''};
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
  	this.setState({[event.target.name]: event.target.value})  
  }
  validate(button){
    console.log(validateEmail(this.state.email))
    if(validateEmail(this.state.email.trim())){
      this.props[button](this.state)
    } else {
      this.setState({error:'invalid email'})
    }
  }
	render() {
		return (
			<div className='login'>
				<div>Tap</div>
				<input type='text' name='email' placeholder='email' value={this.state.email} onChange={this.handleChange}/>
				<br/>
				<input type='text' name='key' placeholder='api key' value={this.state.key} onChange={this.handleChange}/>
				<br/>
        <div className='Alert' name='Alert'>{this.state.error}</div>
				<div className='ActionButton' name='Login' onClick={() => this.validate('login')}>Login</div>
				<div className='ActionButton' name='Signup' onClick={() => this.validate('signup')}>Signup</div>
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
  	  dispatch(accountThunk('login', state.email.trim() + ':' + state.key.trim()))
    },
    signup: (state) => {
    	dispatch(accountThunk('signup', state.email.trim()))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)
