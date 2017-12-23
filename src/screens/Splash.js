import React, { Component } from 'react'
import {connect} from 'react-redux'
import {toPrevScreen} from '../actions/index'
import AppButton from '../components/AppButton'
import Message from '../components/Message'

class Splash extends Component {
	render() {
		return (
			<div>
				<Message text={this.props.text}/>
				<AppButton name='OK' click={this.props.click}/>
			</div>
		)
	}
}

const mapStateToProps = state => {
  return {
    text: state.splashText
  }
}

const mapDispatchToProps = dispatch => {
  return {
    click: () => {
    	dispatch(toPrevScreen())
    }
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Splash)