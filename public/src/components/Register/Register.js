import React, { Component } from 'react'
import { connect } from 'react-redux'
import { register } from '../../reducers/auth-reducer'
import InputWithLabel from '../InputWithLabel'

class Register extends Component {
  render() {
    return (
      <div className="Register-container">
        <section className="Register-content">
          <div className="Register-content-top">
            <h1>Register</h1>
            <span>
              Create an account to comment on news articles or submit content to
              Rocket League Cinema.
            </span>
          </div>

          <div className="Register-content-bottom">
            <div className="Register-content-left">
              <InputWithLabel />
            </div>

            <div className="Register-content-right" />
          </div>
        </section>
      </div>
    )
  }
}

export default connect(state => state, { register })(Register)
