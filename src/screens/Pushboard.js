import React, { Component } from 'react'
import {connect} from 'react-redux'
import StatusBar from '../components/StatusBar'
import Board from '../components/Board'
import ButtonBar from '../components/ButtonBar'
import '../components/App.css';
import {AppButtons} from '../data/shared_constants'

class Pushboard extends Component {
  render() {
    return (
      <div className='Pushboard'>
        <StatusBar />
        <Board />
        <ButtonBar buttons={AppButtons['Pushboard']}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
  }
}

export default connect(mapStateToProps)(Pushboard)