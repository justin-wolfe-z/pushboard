import React, { Component } from 'react';
import {connect} from 'react-redux'
import PushButton from './PushButton'

class Board extends Component {
	render() {
		return (
			<div>
					{
						this.props.buttons.map((button) => {
							return <PushButton 
								key={button.id} 
								icon={button.icon}
								id={button.id}
								text={button.text}
								type={button.type}
							/>
						})
					}
			</div>
		)
	}
}

const mapStateToProps = state => {
  return {
    buttons: state.buttons,
  }
}

export default connect(mapStateToProps)(Board)