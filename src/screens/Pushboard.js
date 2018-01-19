import React, { Component } from 'react'
import {connect} from 'react-redux'
import StatusBar from '../components/StatusBar'
import Board from '../components/Board'
import ButtonBar from '../components/ButtonBar'
import '../components/App.css';
import {toggleEditSelect,toSettings} from '../actions/index'

class Pushboard extends Component {
  render() {
    return (
      <div className='Pushboard'>
        <StatusBar />
        <Board />
        <ButtonBar items={["edit","⚙"]} click={this.props.toDispatch}/>
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
      } else if (btn.name==="⚙"){
        dispatch(toSettings())
      }
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Pushboard)