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
import { queryThunk } from './actions/index'

const store = createStore(reducer, applyMiddleware(thunk,logger))

render(
	<AppContainer>
  	<Provider store={store}>
    	<App />
    </Provider>
	</AppContainer>,
  document.getElementById('root')
)

store.dispatch(queryThunk(window.location.search))

if (module.hot) {
    module.hot.accept('./components/App', () => {
        const NextApp = require('./components/App').default; 
        ReactDOM.render(
            <AppContainer>
              	<Provider store={store}>
                	<NextApp />
                </Provider>
            </AppContainer>,
            document.getElementById('root')
        );
    });
}