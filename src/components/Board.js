import React, { Component } from 'react';
import {connect} from 'react-redux'
import Button from './Button'

class Board extends Component {
	render() {
		return (
			<div>
					{
						this.props.buttons.map((button) => {
							return <Button 
								key={button.id} 
								icon={button.icon}
								id={button.id}
							/>
						})
					}
			</div>
		)
	}
}

const mapStateToProps = state => {
  return {
    buttons: state.buttons
  }
}

export default connect(mapStateToProps)(Board)