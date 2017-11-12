import React, { Component } from 'react';

class Button extends Component {
	handleClick(e){
		console.log(e);
		console.log("clicked a button");
	}

	render() {
		return (
			<div onClick={this.handleClick}>'Button'</div>
		)
	}
}

export default Button