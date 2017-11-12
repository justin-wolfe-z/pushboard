import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { connect } from 'react-redux';
import { clickButton, logIn } from './actions/index'
import App from './components/App'
import reducer from './reducers'

const store = createStore(reducer)
console.log(store.getState())

const unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

store.dispatch(logIn())

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)