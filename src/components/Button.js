import React, { Component } from 'react'
import {connect} from 'react-redux'
import {clickButton, toEditor} from '../actions/index'

class Button extends Component {
	render() {
		return (
			<div 
				className='Button' 
				onClick={() => this.props.click(this.props.id)}
			>
				{this.props.icon}
			</div>
		)
	}
}

const mapDispatchToProps = dispatch => {
  return {
    click: (buttonID) => dispatch(toEditor(buttonID))
  }
}

export default connect(null,mapDispatchToProps)(Button)