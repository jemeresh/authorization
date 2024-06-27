import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import auth from './auth'
import log from './log'

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    auth,
    log
  })

export default createRootReducer
