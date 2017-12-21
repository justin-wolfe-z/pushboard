import React, { Component } from 'react'
import {connect} from 'react-redux'
import {clickButton,loginThunk} from '../actions/index'

class AppButton extends Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.click = this.click.bind(this);
  }
  click() {
    console.log('child click')
    this.props.parentClick('click')
    console.log('after parent click')
  }
	render() {
		return (
			<div className='AppButton' onClick={this.click}>
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
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(AppButton)