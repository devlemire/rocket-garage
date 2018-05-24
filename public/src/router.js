import { Switch, Route } from 'react-router-dom'
import React from 'react'

// Components
import Login from './components/Login'
import Home from './components/Home'
import Register from './components/Register'

export default (
  <Switch>
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
    <Route exact path="/" component={Home} />
  </Switch>
)
