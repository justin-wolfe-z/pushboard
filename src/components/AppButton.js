import React, { Component } from 'react'
import {connect} from 'react-redux'
import {clickButton,loginThunk} from '../actions/index'

class AppButton extends Component {
  constructor(props) {
    super(props);
    this.click = this.click.bind(this);
  }
  click() {
    this.props.pClick({
      name:this.props.name
    })
  }
	render() {
		return (
			<div className='AppButton' onClick={this.click}>
				{this.props.name}
			</div>
		)
	}
}

export default AppButton