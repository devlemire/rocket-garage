import axios from 'axios'
import config from '../config'

// Reducer's initial state
const initialState = {
  user: null
}

// Action Types
const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'
const REGISTER = 'REGISTER'
const CHECK = 'CHECK'

/* 
  TODO: 
    Handle login rejection
    Handle logout rejection
    Handle register rejection
*/

// Reducer
export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN + '_FULFILLED':
      return Object.assign({}, state, { user: action.payload.data })

    case REGISTER + '_FULFILLED':
      return Object.assign({}, state, { user: action.payload.data })

    case LOGOUT + '_FULFILLED':
      return Object.assign({}, state, { user: null })

    case CHECK + '_FULFILLED':
      return Object.assign({}, state, { user: action.payload.data })

    case CHECK + '_REJECTED':
      return Object.assign({}, state, { user: null })

    default:
      return state
  }
}

// Action Creators
export function login(requestBody, history) {
  const promise = axios
    .post(config.api.auth.login, requestBody)
    .then(r => {
      history.push('/')
      return r
    })
    .catch(r => r)

  return {
    type: LOGIN,
    payload: promise
  }
}

export function logout() {
  return {
    type: LOGOUT,
    payload: axios.post(config.api.auth.logout)
  }
}

export function check() {
  return {
    type: CHECK,
    payload: axios.post(config.api.auth.check)
  }
}

export function register(requestBody, history) {
  const promise = axios
    .post(config.api.auth.register, requestBody)
    .then(r => {
      history.push('/')
      return r
    })
    .catch(r => r)

  return {
    type: REGISTER,
    payload: promise
  }
}
