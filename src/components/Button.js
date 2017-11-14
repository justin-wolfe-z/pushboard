import React, { Component } from 'react';
import {connect} from 'react-redux'
import {clickButton} from '../actions/index'

class Button extends Component {
	render() {
		return (
			<div 
				className='Button' 
				onClick={() => this.props.clickButton(this.props.id)}
			>
				{this.props.icon}
			</div>
		)
	}
}

const mapDispatchToProps = dispatch => {
  return {
    clickButton: (id) => dispatch(clickButton(id))
  }
}

export default connect(null,mapDispatchToProps)(Button)