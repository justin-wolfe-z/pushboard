import React, { Component } from 'react'
import {connect} from 'react-redux'

class Editor extends Component {
	render() {
		return (
			<div className='editor'>
				<div>Edit</div>
					<div className='params'>
						<div>icon: {this.props.button.icon}</div>
						<div>name: {this.props.button.name}</div>
						<div>type: {this.props.button.type}</div>
						<div>text: {this.props.button.text}</div>
					</div>
					<div className='save'>Save and Exit</div>
			</div>
		)
	}
}

const mapStateToProps = state => {
  return {
    button: state.selectedButton
  }
}

export default connect(mapStateToProps)(Editor)
