import React, { Component } from 'react'
import { connect } from 'react-redux'
import { register } from '../../reducers/auth-reducer'
import InputWithLabel from '../InputWithLabel'

//Utils
import regionList from '../../utils/region-list'
import countryList from '../../utils/country-list'

class Register extends Component {
  constructor() {
    super()

    this.state = {
      regions: regionList,
      countries: countryList
    }
  }
  render() {
    const { regions, countries } = this.state

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
              <form autoComplete="something-random">
                <InputWithLabel
                  label="USERNAME"
                  placeholder="Username"
                  inputType="text"
                  autoComplete="new-username"
                  containerWidth="100%"
                />

                <InputWithLabel
                  label="E-MAIL ADDRESS"
                  placeholder="Email"
                  inputType="email"
                  autoComplete="new-email"
                  containerWidth="100%"
                />

                <InputWithLabel
                  label="PASSWORD"
                  placeholder="Password"
                  inputType="password"
                  autoComplete="new-password"
                  containerWidth="100%"
                />

                <InputWithLabel
                  label="CONFIRM PASSWORD"
                  placeholder="Confirm Password"
                  inputType="password"
                  autoComplete="new-confirm-password"
                  containerWidth="100%"
                />

                <div style={{ display: 'flex' }}>
                  <InputWithLabel
                    label="REGION"
                    isSelect
                    data={regions}
                    selectWidth="292px"
                    autoComplete="new-region"
                    containerWidth="50%"
                  />

                  <InputWithLabel
                    label="COUNTRY"
                    isSelect
                    data={countries}
                    selectWidth="292px"
                    autoComplete="new-country"
                    containerWidth="50%"
                  />
                </div>
              </form>
            </div>

            <div className="Register-content-right" />
          </div>
        </section>
      </div>
    )
  }
}

export default connect(state => state, { register })(Register)
