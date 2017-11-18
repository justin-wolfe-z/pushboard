import React from 'react'
import { render } from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk';
import { loginThunk } from './actions/index'
import App from './components/App'
import reducer from './reducers'

const store = createStore(reducer,applyMiddleware(thunk,logger))

/*const unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)*/

store.dispatch(loginThunk())

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)