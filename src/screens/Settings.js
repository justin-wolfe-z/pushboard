import React, { Component } from 'react'
import {connect} from 'react-redux'
import {toPrevScreen} from '../actions/index'
import AppButton from '../components/AppButton'
import Message from '../components/Message'

class Settings extends Component {
	render() {
		return (
			<div>
				<div>hello</div>
				<Message text={this.props.text}/>
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