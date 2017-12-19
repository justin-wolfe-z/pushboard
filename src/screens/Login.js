import React, { Component } from 'react'
import {connect} from 'react-redux'
import ButtonBar from '../components/ButtonBar'
import {AppButtons} from '../data/shared_constants'

class Login extends Component {
	render() {
		return (
			<div className='login'>
				<div>Pushboard</div>
				<input type='text' placeholder='email'/>
				<br/>
				<input type='text' placeholder='api key'/>
				<br/>
				<ButtonBar buttons={AppButtons['Login']}/>
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
    click: () => {
    	//
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)
