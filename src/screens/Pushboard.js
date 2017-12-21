import React, { Component } from 'react'
import {connect} from 'react-redux'
import StatusBar from '../components/StatusBar'
import Board from '../components/Board'
import AppButton from '../components/AppButton'
import '../components/App.css';
import {AppButtons} from '../data/shared_constants'

class Pushboard extends Component {
  constructor(props) {
    super(props);
    this.state = {email:'', key:'', error:''};
  }
  parentClick(name){
    console.log("parentclick")
    console.log(name)
  }
  render() {
    return (
      <div className='Pushboard'>
        <StatusBar />
        <Board />
        <AppButton name='click' parentClick={this.parentClick}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
  }
}

export default connect(mapStateToProps)(Pushboard)