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
    this.click = this.click.bind(this);
  }
  click(btn){
    this.props.toDispatch(btn)
  }
  render() {
    return (
      <div className='Pushboard'>
        <StatusBar />
        <Board />
        <AppButton name='edit' pClick={this.click}/>
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
      console.log("dispatch")
      console.log(btn)
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Pushboard)