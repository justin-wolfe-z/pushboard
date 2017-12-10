import React, { Component } from 'react';
import {connect} from 'react-redux'
import {toggleEditSelect} from '../actions/index'
import AppButton from './AppButton'

class ButtonBar extends Component {
	render() {
		return (
			<div>
				<AppButton name="Edit"/>
				<AppButton name="Logs"/>
			</div>
		)
	}
}

const mapDispatchToProps = dispatch => {
  return {
    click: () => dispatch(toggleEditSelect())
  }
}

export default connect(null,mapDispatchToProps)(ButtonBar)