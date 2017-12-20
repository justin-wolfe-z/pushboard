import React, { Component } from 'react'
import {connect} from 'react-redux'
import {toPrevScreen} from '../actions/index'

class Splash extends Component {
	render() {
		return (
			<div>
				<div className='splash'>{this.props.text}</div>
				<div className='actionButton' onClick={() => this.props.click()}>OK</div>
			</div>
		)
	}
}

const mapStateToProps = state => {
  return {
    text: state.splashText
  }
}

const mapDispatchToProps = dispatch => {
  return {
    click: () => {
    	dispatch(toPrevScreen())
    }
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Splash)