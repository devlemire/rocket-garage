import React, { Component } from 'react'
import Guest from './Guest'
import User from './User'
import axios from 'axios'
import config from '../../config'

export default class Header extends Component {
  constructor() {
    super()
    this.state = {
      user: null
    }

    this.logIn = this.logIn.bind(this)
    this.logOut = this.logOut.bind(this)
  }

  componentDidMount() {
    // When the component mounts we need to check if the user is logged in
    // The endpoint returns a 403 if the user is not authenticated
    axios
      .post(config.api.auth.check)
      .then(r => {
        this.setState({ user: r.data })
      })
      .catch(err => {
        this.setState({ user: null })
      })
  }

  logIn(email, password, rememberMe) {
    axios
      .post(config.api.auth.login, { email, password, rememberMe })
      .then(r => {
        this.setState({ user: r.data })
      })
      .catch(err => {
        this.setState({ user: null })
      })
  }

  logOut() {
    axios.post(config.api.auth.logout).then(r => {
      this.setState({ user: null })
    })

    // TODO: handle logout failing?
  }

  render() {
    const { fetchedData, user } = this.state

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
            <User data={user} logOutFn={this.logOut} />
          ) : (
            <Guest logInFn={this.logIn} />
          )}
        </section>
      </header>
    )
  }
}
