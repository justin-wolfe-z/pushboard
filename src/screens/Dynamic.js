import React, { Component } from 'react'
import {connect} from 'react-redux'
import {toPrevScreen} from '../actions/index'
import AppButton from '../components/AppButton'
import Message from '../components/Message'

class Dynamic extends Component {
	render() {
		return (
			<div>
				<Message text={this.props.text}/>
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
    }
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Dynamic)