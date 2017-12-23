import React, { Component } from 'react'

class Field extends Component {
  constructor(props) {
    super(props);
    this.state = {val:''};
    this.change = this.change.bind(this);
  }
  change(event) {
    this.setState({val:event.target.value})
    this.props.change(event,)
  }
	render() {
		return (
			<input name={this.props.name} onChange={this.change} placeholder={this.props.name} value={this.state.val}/>
		)
	}
}

export default Field