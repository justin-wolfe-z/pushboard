import React, { Component } from 'react'
import {connect} from 'react-redux'
import {toPushboard} from '../actions/index'
import ButtonBar from '../components/ButtonBar'

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
					<ButtonBar items={["save","signup"]} click={this.props.toDispatch}/>
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
    toDispatch: (state, btn) => {
      console.log("dispatching from Editor")
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Editor)
