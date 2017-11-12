import React, { Component } from 'react';
import StatusBar from './StatusBar'
import Board from './Board'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <StatusBar/>
        Testers
        <Board/>
      </div>
    );
  }
}

export default App;
