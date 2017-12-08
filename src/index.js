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

store.dispatch(loginThunk('j@zapier.com:ed457159a5dc6767499269767d7240d5'))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)