import React, { Component } from 'react'
import {connect} from 'react-redux'
import {toPushboard} from '../actions/index'

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
					<div 
						className='save' 
						onClick={() => this.props.click()}
					>
						Save and Exit
					</div>
			</div>
		)
	}
}

const mapStateToProps = state => {
  return {
    button: state.selectedButton
  }
}

const mapDispatchToProps = dispatch => {
  return {
    click: () => dispatch(toPushboard())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Editor)
