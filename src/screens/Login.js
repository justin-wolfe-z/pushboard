import React, { Component } from 'react'
import {connect} from 'react-redux'
import ButtonBar from '../components/ButtonBar'
import Message from '../components/Message'
import FieldBox from '../components/FieldBox'
import {accountThunk} from '../actions/index'
import {validateEmail} from '../data/utils'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {email:'', key:'', error:''};
    this.handleChange = this.handleChange.bind(this);
    this.toDispatch = this.toDispatch.bind(this);
  }
  handleChange(event) {
  	this.setState({[event.target.name]: event.target.value, error:''})
  }
  toDispatch(btn){
    if(validateEmail(this.state.email.trim())){
      this.props.toDispatch(this.state, btn)      
    } else {
      this.setState({error:'please enter a valid email'})
    }
  }
	render() {
		return (
			<div className='login'>
				<div>tap</div>
        <FieldBox message={this.state.error} items={["email","key"]} change={this.handleChange}/>
        <Message text={this.state.error}/>
        <ButtonBar items={["login","signup"]} click={this.toDispatch}/>
			</div>
		)
	}
}

const mapStateToProps = state => {
  return {
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toDispatch: (state, btn) => {
      dispatch(accountThunk(btn.name, state.email.trim(), state.key.trim()))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)
