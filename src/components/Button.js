import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

	handleClick(e){
		console.log(this);
		console.log("clicked a button");
	}

	render() {
		return (
			<div className='Button' onClick={this.handleClick}>{this.props.icon}</div>
		)
	}
}

export default Button