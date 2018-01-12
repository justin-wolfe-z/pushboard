import React, { Component } from 'react'

class Area extends Component {
  constructor(props) {
    super(props);
    if(this.props.existing){
      this.state = {val:this.props.existing};
    } else {
      this.state = {val:''};
    }
    this.change = this.change.bind(this);
  }
  change(event) {
    this.setState({val:event.target.value})
    this.props.change(event)
  }
	render() {
		return (
      <div>
        {this.props.labels ? <div className='FieldLabel'>{this.props.name}</div> : ''}
        <textarea name={this.props.name} onChange={this.change} placeholder={this.props.name} value={this.state.val}/>
      </div>
		)
	}
}

export default Area