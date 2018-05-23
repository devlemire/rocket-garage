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
*/

// Reducer
export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN + '_FULFILLED':
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
export function login(requestBody) {
  return {
    type: LOGIN,
    payload: axios.post(config.api.auth.login, requestBody)
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
