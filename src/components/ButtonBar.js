import React, { Component } from 'react';
import {connect} from 'react-redux'
import {toEditSelect} from '../actions/index'

class ButtonBar extends Component {
	render() {
		return (
			<div>
				<div 
					className='actionButton'
					onClick={() => this.props.click()}
				>Edit</div>
				<div className='actionButton'>Logs</div>
			</div>
		)
	}
}

const mapDispatchToProps = dispatch => {
  return {
    click: () => dispatch(toEditSelect())
  }
}

export default connect(null,mapDispatchToProps)(ButtonBar)