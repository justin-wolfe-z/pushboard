import React, { Component } from 'react';
import {connect} from 'react-redux'

class Message extends Component {
	render() {
		return (
			<div className="Message">{this.props.text}</div>
		)
	}
}

export default Message