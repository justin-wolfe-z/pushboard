import React, { Component } from 'react';
import Field from './Field'
import Message from './Message'

class FieldBox extends Component {
	render() {
		return (
			<div>
					{
						this.props.items.map((item) => {
							return <Field
								key={item} 
								name={item}
								label={item}
								change={this.props.change}
								existing={this.props.existing ? this.props.existing[item] : ''}
							/>
						})
					}
			</div>
		)
	}
}

export default FieldBox