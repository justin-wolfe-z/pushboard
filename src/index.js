import React from 'react'
import ReactDOM from 'react-dom'
import { render } from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader';
import logger from 'redux-logger'
import thunk from 'redux-thunk';
import App from './components/App'
import reducer from './reducers'

const store = createStore(reducer, applyMiddleware(thunk,logger))

render(
  <Provider store={store}>
  <AppContainer>
    <App />
  </AppContainer>
  </Provider>,
  document.getElementById('root')
)

if (module.hot) {
    module.hot.accept('./components/App', () => {
        const NextApp = require('./components/App').default; // eslint-disable-line global-require
        ReactDOM.render(
        	<Provider store={store}>
            <AppContainer>
                <NextApp />
            </AppContainer>
          </Provider>,
            document.getElementById('root')
        );
    });
}