import React, { Component } from 'react';
import {connect} from 'react-redux'
import Pushboard from '../screens/Pushboard'
import Splash from '../screens/Splash'
import './App.css';

class App extends Component {
  render() {
  	switch(this.props.screen){
	  	case "Pushboard":
	  		return (<Pushboard/>)
  		case "Splash":
  			return (<Splash/>)
  	}
  }
}

const mapStateToProps = state => {
  return {
    screen: state.screen
  }
}

export default connect(mapStateToProps)(App)
