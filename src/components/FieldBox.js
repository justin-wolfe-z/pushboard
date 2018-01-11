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
								labels={this.props.labels}
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