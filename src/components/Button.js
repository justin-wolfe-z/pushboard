import React, { Component } from 'react'
import {connect} from 'react-redux'
import {clickButton, toEditor} from '../actions/index'

class Button extends Component {
	render() {
		return (
			<div 
				className={['Button',this.props.isSelecting ? "boardSelecting": "boardNotSelecting"].join(" ")} 
				onClick={() => this.props.click(this.props.id,this.props.isSelecting)}
			>
				{this.props.icon}
			</div>
		)
	}
}
     	 
const mapStateToProps = state => {
  return {
  	isSelecting: state.isSelecting
  }
}


const mapDispatchToProps = dispatch => {
  return {
    click: (buttonID, selMode) => {
    	selMode ? dispatch(toEditor(buttonID)) : dispatch(clickButton(buttonID))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Button)