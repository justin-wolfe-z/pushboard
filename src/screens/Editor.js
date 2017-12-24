import React, { Component } from 'react'
import {connect} from 'react-redux'
import {toPushboard} from '../actions/index'
import ButtonBar from '../components/ButtonBar'
import FieldBox from '../components/FieldBox'

class Editor extends Component {
  constructor(props) {
    super(props);
    let button = this.props.button;
    this.state = {icon:button.icon, label:button.label, text:button.text};
    this.handleChange = this.handleChange.bind(this);
    this.toDispatch = this.toDispatch.bind(this);
  }
  handleChange(event) {
  	this.setState({[event.target.name]: event.target.value, error:''})
  	console.log(this.state)
  }
  toDispatch(btn){
    this.props.toDispatch(this.state, btn)      
  }
	render() {
		return (
			<div className='editor'>
				<div>Edit</div>
					<FieldBox labels="yes" items={["label","text"]} existing={this.state} change={this.handleChange}/>
					<ButtonBar items={["save","exit"]} click={this.toDispatch}/>
			</div>
		)
	}
}

const mapStateToProps = state => {
  return {
    button: state.selectedButton
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toDispatch: (state, btn) => {
      if(btn.name==='exit'){
      	dispatch(toPushboard())
      }
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Editor)
