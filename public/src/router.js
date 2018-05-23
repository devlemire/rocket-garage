import { Switch, Route } from 'react-router-dom'
import React from 'react'

// Components
import Login from './components/Login'

export default (
  <Switch>
    <Route path="/login" component={Login} />
  </Switch>
)
