import React, { Component } from 'react'
import {connect} from 'react-redux'
import {} from '../actions/index'

class AppButton extends Component {
	render() {
		return (
			<div 
				className='AppButton' 
				onClick={() => this.props.click(this.props)}
			>
				{this.props.name}
			</div>
		)
	}
}
     	 
const mapStateToProps = state => {
  return {
  }
}


const mapDispatchToProps = dispatch => {
  return {
    click: (button ) => {
    	console.log("App Button!", button)
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(AppButton)