import React, { Component } from 'react';

class Button extends Component {
	handleClick(e){
		console.log(e);
		console.log("clicked a button");
	}

	render() {
		return (
			<div onClick={this.handleClick}>{this.props.icon}</div>
		)
	}
}

export default Button