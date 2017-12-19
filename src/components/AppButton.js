import React, { Component } from 'react'
import {connect} from 'react-redux'
import {clickButton,loginThunk} from '../actions/index'

class AppButton extends Component {
	render() {
		return (
			<div className='AppButton'>
				{this.props.name}
			</div>
		)
	}
}
     	 
const mapStateToProps = state => {
  return {
  }
}

//there has to be a better way to do this!
const mapDispatchToProps = dispatch => {
  return {
    click: (props) => {
    	console.log("click triggered")
    }
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(AppButton)