import React, { Component } from 'react'

class AppButton extends Component {
  constructor(props) {
    super(props);
    this.click = this.click.bind(this);
  }
  click() {
    this.props.click({
      name:this.props.name
    })
  }
	render() {
		return (
			<div className='AppButton noselect' onClick={this.click}>
				{this.props.name}
			</div>
		)
	}
}

export default AppButton