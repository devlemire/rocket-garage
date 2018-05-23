import { createStore, applyMiddleware } from 'redux'
import reduxPromiseMiddleware from 'redux-promise-middleware'

//Reducers
import authReducer from './reducers/auth-reducer'

export default createStore(
  authReducer,
  applyMiddleware(reduxPromiseMiddleware())
)
