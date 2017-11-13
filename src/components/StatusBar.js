import React, { Component } from 'react';
import {connect} from 'react-redux'

class StatusBar extends Component {
	render() {
		return (
			<div>{this.props.account}</div>
		)
	}
}

const mapStateToProps = state => {
  return {
    account: state.account
  }
}

export default connect(mapStateToProps)(StatusBar)