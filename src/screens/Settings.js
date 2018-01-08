import React, { Component } from 'react'
import {connect} from 'react-redux'
import {toPrevScreen} from '../actions/index'
import AppButton from '../components/AppButton'
import Message from '../components/Message'

class Settings extends Component {
	render() {
		return (
			<div>
				<Message text={this.props.account}/>
				<Message text={this.props.status}/>
				<AppButton name='reset API key' click={this.props.click}/>
				<AppButton name='log out' click={this.props.click}/>
				<AppButton name='exit' click={this.props.click}/>
			</div>
		)
	}
}

const mapStateToProps = state => {
  return {
    account: state.email,
    status: state.connectionStatus
  }
}

const mapDispatchToProps = dispatch => {
  return {
    click: () => {
    	dispatch(toPrevScreen())
    }
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Settings)