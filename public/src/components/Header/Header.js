import React, { Component } from 'react'
import Guest from './Guest'
import User from './User'

import { connect } from 'react-redux'
import { login, logout, check } from '../../reducers/auth-reducer'

class Header extends Component {
  componentDidMount() {
    // When the component mounts we need to check if the user is logged in
    // The endpoint returns a 403 if the user is not authenticated
    this.props.check()
  }

  render() {
    const { login, logout, user } = this.props

    return (
      <header>
        <section className="Header-left font-light">
          <div className="Header-social-icons mr-8">
            <i className="fab fa-twitter header-icon mr-8" />
            <i className="fab fa-facebook-f header-icon mr-8" />
            <i className="fab fa-discord header-icon mr-8" />
          </div>
          <span>
            WELCOME TO ROCKET LEAGUE GARAGE, THE WORLD'S FIRST ROCKET LEAGUE FAN
            SITE
          </span>
        </section>

        <section className="Header-right">
          {user ? (
            <User data={user} logOutFn={logout} />
          ) : (
            <Guest logInFn={login} />
          )}
        </section>
      </header>
    )
  }
}

export default connect(state => state, { login, logout, check })(Header)
