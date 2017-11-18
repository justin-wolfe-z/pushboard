import React, { Component } from 'react'
import {connect} from 'react-redux'

class Splash extends Component {
	render() {
		return (
			<div className='splash'>{this.props.text}</div>
		)
	}
}

const mapStateToProps = state => {
  return {
    text: state.splashText
  }
}

export default connect(mapStateToProps)(Splash)