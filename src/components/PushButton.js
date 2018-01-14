import React, { Component } from 'react'
import {connect} from 'react-redux'
import {pushThunk, toEditor, toDynamic} from '../actions/index'
import emoji from 'node-emoji'

class PushButton extends Component {
	render() {
		return (
			<div 
				className={['PushButton',this.props.isSelecting ? "boardSelecting": "boardNotSelecting"].join(" ")} 
				onClick={() => this.props.click(this.props, this.props.isSelecting, this.props.type)}
			>
				{emoji.get(this.props.icon)}
			</div>
		)
	}
}
     	 
const mapStateToProps = state => {
  return {
  	isSelecting: state.isSelecting,
  }
}


const mapDispatchToProps = dispatch => {
  return {
    click: (button, selecting, type) => {
    	if(selecting){
    		dispatch(toEditor(button)) 
    	} else {
    		type !== 'static' ? dispatch(toDynamic(button)) : dispatch(pushThunk(button))
    	}
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(PushButton)