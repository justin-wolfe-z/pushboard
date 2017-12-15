import React, { Component } from 'react';
import {connect} from 'react-redux'
import AppButton from './AppButton'

class ButtonBar extends Component {
	render() {
		return (
			<div>
					{
						this.props.buttons.map((button) => {
							return <AppButton
								key={button.text} 
								name={button.text}
								screen={button.screen}
							/>
						})
					}
			</div>
		)
	}
}

export default connect(null,null)(ButtonBar)