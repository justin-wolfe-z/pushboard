import React, { Component } from 'react';
import Field from './Field'

class FieldBox extends Component {
	render() {
		return (
			<div>
					{
						this.props.items.map((item) => {
							return <Field
								key={item} 
								name={item}
								change={this.props.change}
							/>
						})
					}
			</div>
		)
	}
}

export default FieldBox