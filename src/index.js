import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import reducer from './reducers'
import thunk from 'redux-thunk'
import {loadTasksApi} from './actions/index'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  reducer,
  applyMiddleware(thunk)
)

store.dispatch(loadTasksApi())

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
