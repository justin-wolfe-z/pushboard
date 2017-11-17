import React, { Component } from 'react'
import {connect} from 'react-redux'
import StatusBar from '../components/StatusBar'
import Board from '../components/Board'
import ButtonBar from '../components/ButtonBar'
import '../components/App.css';

class Pushboard extends Component {
  render() {
    return (
      <div className='Pushboard'>
        <StatusBar />
        <Board/>
        <ButtonBar />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
  }
}

export default connect(mapStateToProps)(Pushboard)