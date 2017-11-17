import React, { Component } from 'react';
import {connect} from 'react-redux'
import Pushboard from '../screens/Pushboard'
import './App.css';

class App extends Component {
  render() {
    return (
    	<Pushboard/>
    )
  }
}

const mapStateToProps = state => {
  return {
    screen: state.screen
  }
}

export default connect(mapStateToProps)(App)
