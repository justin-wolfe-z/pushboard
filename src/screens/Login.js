import React, { Component } from 'react'
import {connect} from 'react-redux'

class Login extends Component {
	render() {
		return (
			<div className='login'>
				<div>Pushboard</div>
				<input type='text' placeholder='email'/>
				<br/>
				<input type='text' placeholder='api key'/>
				<br/>
				<div className='actionButton'>Sign up</div>
				<div className='actionButton'>Login</div>
			</div>
		)
	}
}

const mapStateToProps = state => {
  return {
    button: state.selectedButton
  }
}

const mapDispatchToProps = dispatch => {
  return {
    //click: () => dispatch(toPushboard())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)
