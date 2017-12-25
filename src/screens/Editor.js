import React, { Component } from 'react'
import {connect} from 'react-redux'
import {toPushboard, saveThunk} from '../actions/index'
import ButtonBar from '../components/ButtonBar'
import FieldBox from '../components/FieldBox'

class Editor extends Component {
  constructor(props) {
    super(props);
    let button = this.props.button;
    this.state = this.props.button;
    this.handleChange = this.handleChange.bind(this);
    this.toDispatch = this.toDispatch.bind(this);
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
					<FieldBox labels="true" items={["icon","label","text"]} existing={this.state} change={this.handleChange}/>
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
