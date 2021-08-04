import { createBrowserHistory } from 'history'
import { applyMiddleware, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './rootReducer'
import thunk from 'redux-thunk'

export const history = createBrowserHistory()

const store = createStore(
  rootReducer(history),
  composeWithDevTools(
    applyMiddleware(
      thunk,
      routerMiddleware(history)
    )
  )
)

export default store
