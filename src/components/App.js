import React, { Component } from 'react';
import {connect} from 'react-redux'
import Login from '../screens/Login'
import Editor from '../screens/Editor'
import Pushboard from '../screens/Pushboard'
import Splash from '../screens/Splash'
//import './App.css';

class App extends Component {
  render() {
  	switch(this.props.screen){
  		case "Login":
  			return (<Login/>)
	  	case "Pushboard":
	  		return (<Pushboard/>)
  		case "Editor":
  			return (<Editor/>)
  		case "Splash":
  			return (<Splash/>)
			default:
				return (<div>No valid value for "screen" prop</div>)
  	}
  }
}

const mapStateToProps = state => {
  return {
    screen: state.screen
  }
}

export default connect(mapStateToProps)(App)
