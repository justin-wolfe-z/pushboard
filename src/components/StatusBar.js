import React, { Component } from 'react';
import {connect} from 'react-redux'

class StatusBar extends Component {
	render() {
		return (
			<div>{this.props.account} - {this.props.status}</div>
		)
	}
}

const mapStateToProps = state => {
  return {
    account: state.accountEmail,
    status: state.connectionStatus
  }
}

export default connect(mapStateToProps)(StatusBar)