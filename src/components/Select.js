import React, { Component } from 'react'

class Select extends Component {
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
        <select name={this.props.name} onChange={this.change} placeholder={this.props.name} value={this.state.val}>
          {
            this.props.items.map((item) => {
                return <option key={item} value={item}>{item}</option>
            })
          }
        </select>
      </div>
		)
	}
}

export default Select