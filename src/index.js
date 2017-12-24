import React from 'react'
import ReactDOM from 'react-dom'
import { render } from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk';
import App from './components/App'
import reducer from './reducers'

const store = createStore(reducer, applyMiddleware(thunk,logger))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextApp = require('./components/App').default
    ReactDOM.render(
      <NextApp />,
      document.getElementById('root')
    )
  })
}