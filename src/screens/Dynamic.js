import React, { Component } from 'react'
import {connect} from 'react-redux'
import ButtonBar from '../components/ButtonBar'
import Message from '../components/Message'
import Area from '../components/Area'
import {pushThunk, toPrevScreen} from '../actions/index'

class Dynamic extends Component {
  constructor(props) {
    super(props);
    this.state = {text:props.button.type === 'dynamic' ? '' : props.button.text}
    this.handleChange = this.handleChange.bind(this);
    this.toDispatch = this.toDispatch.bind(this);
  }
  handleChange(event) {
  	this.setState({[event.target.name]: event.target.value, error:''})
  }
  toDispatch(btn){
    this.props.toDispatch(this.state, btn, this.props.button)      
  }
	render() {
		return (
			<div>
				<Message text="enter your text"/>
				<Area name="text" existing={this.state.text} change={this.handleChange}/>
				<ButtonBar items={["send","cancel"]} click={this.toDispatch}/>
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
    toDispatch: (state, btn, pushButton) => {
      if(btn.name==="send"){
      	let senderButton = Object.assign({}, pushButton, {
      		text: state.text
      	})
        dispatch(pushThunk(senderButton,true))
        dispatch(toPrevScreen())
      } else if (btn.name==="cancel"){
        dispatch(toPrevScreen())
      }
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Dynamic)