import React, { Component } from 'react';
import {connect} from 'react-redux'

class Button extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

	handleClick(){
		console.log(this);
		console.log("clicked a button");
	}

	render() {
		return (
			<div 
				className='Button' 
				onClick={() => this.props.clickButton(this.props.id)}
			>
				{this.props.icon}
			</div>
		)
	}
}

const mapDispatchToProps = dispatch => {
  return {
    clickButton : (id) => dispatch({
      type : 'CLICK_BUTTON',
      target: id
    })
  }
}


export default connect(null,mapDispatchToProps)(Button)