import React, { Component } from 'react'
import {connect} from 'react-redux'
import StatusBar from '../components/StatusBar'
import Board from '../components/Board'
import ButtonBar from '../components/ButtonBar'
import '../components/App.css';
import {toggleEditSelect} from '../actions/index'

class Pushboard extends Component {
  render() {
    return (
      <div className='Pushboard'>
        <StatusBar />
        <Board />
        <ButtonBar items={["edit","log"]} click={this.props.toDispatch}/>
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
    toDispatch: (btn) => {
      if(btn.name==="edit"){
        dispatch(toggleEditSelect())
      }
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Pushboard)