import React, { Component } from 'react'
import {connect} from 'react-redux'
import {toPushboard, saveThunk} from '../actions/index'
import ButtonBar from '../components/ButtonBar'
import FieldBox from '../components/FieldBox'
import Select from '../components/Select'
import emoji from 'node-emoji'

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.button;
    this.handleChange = this.handleChange.bind(this);
    this.toDispatch = this.toDispatch.bind(this);
    console.log(emoji.emoji)
  }
  handleChange(event) {
  	this.setState({[event.target.name]: event.target.value, error:''})
  }
  toDispatch(btn){
    this.props.toDispatch(this.state, btn)      
  }
	render() {
		return (
			<div className='editor'>
				<div>Edit</div>
          <Select emojis="true" labels="true" items={emoji.emoji} existing={this.state.icon} name="icon" change={this.handleChange}/>
          <Select labels="true" items={{static:"static",dynamic:"dynamic",template:"template"}} existing={this.state.type} name="type" change={this.handleChange}/>
					<FieldBox labels="true" items={["label","text"]} existing={this.state} change={this.handleChange}/>
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
      switch(btn.name){
      	case "exit":
      		dispatch(toPushboard())
      		break;
    		case "save":
    			dispatch(saveThunk(state))
    			break;
  			default:
  				break;
      }
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Editor)
