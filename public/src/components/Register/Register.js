import React, { Component } from 'react'
import { connect } from 'react-redux'
import { register } from '../../reducers/auth-reducer'
import InputWithLabel from '../InputWithLabel'

//Utils
import regionList from '../../utils/region-list'
import countryList from '../../utils/country-list'

class Register extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    region: regionList[0].value,
    country: countryList[0].value,
    needsParent: true,
    parentEmail: '',
    notifyMe: false,
    acceptedTerms: false,
    regions: regionList,
    countries: countryList
  }

  updateState = (prop, val) => {
    this.setState({ [prop]: val })
  }

  toggleState = prop => {
    this.setState({ [prop]: !this.state[prop] })
  }

  // toggleParent = () => {
  //   this.setState({ needsParent: !this.state.needsParent })
  // }

  handleRegister = e => {
    e.preventDefault()
    const { register, history } = this.props
    let stateCopy = Object.assign({}, this.state)
    delete stateCopy.regions
    delete stateCopy.countries

    register(stateCopy, history)
  }

  render() {
    const { regions, countries, needsParent } = this.state

    return (
      <div className="Register-container">
        <section className="Register-content">
          <div className="Register-content-top">
            <h1>REGISTER AN ACCOUNT</h1>
            <span>
              Create an account to comment on news articles or submit content to
              Rocket League Cinema.
            </span>
          </div>

          <div className="Register-content-bottom">
            <div className="Register-content-left">
              <form onSubmit={this.handleRegister}>
                <InputWithLabel
                  label="USERNAME"
                  placeholder="Username"
                  inputType="text"
                  autoComplete="new-username"
                  containerWidth="100%"
                  stateProp="username"
                  updateFn={this.updateState}
                />

                <InputWithLabel
                  label="E-MAIL ADDRESS"
                  placeholder="Email"
                  inputType="email"
                  autoComplete="new-email"
                  containerWidth="100%"
                  stateProp="email"
                  updateFn={this.updateState}
                />

                <InputWithLabel
                  label="PASSWORD"
                  placeholder="Password"
                  inputType="password"
                  autoComplete="new-password"
                  containerWidth="100%"
                  stateProp="password"
                  updateFn={this.updateState}
                />

                <InputWithLabel
                  label="CONFIRM PASSWORD"
                  placeholder="Confirm Password"
                  inputType="password"
                  autoComplete="new-confirm-password"
                  containerWidth="100%"
                  stateProp="confirmPassword"
                  updateFn={this.updateState}
                />

                <div style={{ display: 'flex', marginBottom: '30px' }}>
                  <InputWithLabel
                    label="REGION"
                    isSelect
                    data={regions}
                    selectWidth="292px"
                    autoComplete="new-region"
                    containerWidth="50%"
                    stateProp="region"
                    updateFn={this.updateState}
                  />

                  <InputWithLabel
                    label="COUNTRY"
                    isSelect
                    data={countries}
                    selectWidth="292px"
                    autoComplete="new-country"
                    containerWidth="50%"
                    stateProp="country"
                    updateFn={this.updateState}
                  />
                </div>

                {needsParent ? (
                  <div className="Register-needs-parent-container">
                    <div className="Register-needs-parent-left">
                      <input
                        type="checkbox"
                        id="needsParent-checkbox"
                        onChange={() => this.toggleState('needsParent')}
                      />
                      <label htmlFor="needsParent-checkbox">
                        I AM 17 YEARS OR OLDER
                      </label>

                      <div className="ParentEmail-input">
                        <InputWithLabel
                          label="PARENT EMAIL ADDRESS"
                          placeholder="Parent Email"
                          inputType="email"
                          autoComplete="new-parent-email"
                          containerWidth="92%"
                          noMargin
                          stateProp="parentEmail"
                          updateFn={this.updateState}
                        />
                      </div>
                    </div>

                    <div className="Register-needs-parent-right">
                      <h4>WHAT'S THIS?</h4>
                      <span>
                        Due to changes in EU law, the GDPR requires us to verify
                        that our users under the age of 17, have permission from
                        their parents or legal guardian.
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="Register-label-container">
                    <input
                      type="checkbox"
                      id="needsParent-checkbox"
                      onChange={() => this.toggleState('needsParent')}
                      checked={!needsParent}
                    />
                    <label htmlFor="needsParent-checkbox">
                      I AM 17 YEARS OR OLDER
                    </label>
                  </div>
                )}

                <div
                  style={{ marginBottom: '30px' }}
                  className="Register-label-container"
                >
                  <input
                    type="checkbox"
                    id="Register-notify-checkbox"
                    onChange={() => this.toggleState('notifyMe')}
                  />
                  <label htmlFor="Register-notify-checkbox">
                    NOTIFY ME VIA EMAIL WHEN I RECEIVE PRIVATE MESSAGES AND
                    COMMENTS
                  </label>
                </div>

                <div
                  style={{ marginBottom: '45px' }}
                  className="Register-label-container"
                >
                  <input
                    type="checkbox"
                    id="Register-accept-terms-checkbox"
                    onChange={() => this.toggleState('acceptedTerms')}
                  />
                  <label htmlFor="Register-accept-terms-checkbox">
                    I ACCEPT HOW WE COLLECT, USE, AND SHARE YOUR DATA. TO LEARN
                    MORE, READ OUR PRIVACY POLICY
                  </label>
                </div>

                <button
                  style={{ display: 'block' }}
                  className="button-blue Register-submit-button"
                  type="submit"
                >
                  REGISTER ACCOUNT
                </button>
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
