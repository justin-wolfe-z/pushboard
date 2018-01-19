import React, { Component } from 'react'
import {connect} from 'react-redux'
import {toPrevScreen, logOutThunk, resetKeyThunk} from '../actions/index'
import AppButton from '../components/AppButton'
import Message from '../components/Message'

class Settings extends Component {
	render() {
		return (
			<div>
				<Message text={this.props.account}/>
				<Message text={this.props.api_key}/>
				<AppButton name='reset API key' click={this.props.toDispatch}/>
				<AppButton name='log out' click={this.props.toDispatch}/>
				<AppButton name='exit' click={this.props.toDispatch}/>
			</div>
		)
	}
}

const mapStateToProps = state => {
  return {
    account: state.email,
    api_key: state.key
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toDispatch: (btn) => {
    	switch(btn.name){
    		case "exit":
    			dispatch(toPrevScreen())
    			break;
    		case "log out":
    			dispatch(logOutThunk())
    			break;
    		case "reset API key":
    			dispatch(resetKeyThunk())
    			break;	
    	}
    }
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Settings)