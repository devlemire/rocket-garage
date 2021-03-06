import React, { Component } from 'react'
import Modal from 'react-responsive-modal'
import ErrorModal from './ErrorModal'

export default class Guest extends Component {
  constructor() {
    super()

    this.state = {
      email: '',
      password: '',
      modalOpen: false,
      rememberMe: false,
      errors: []
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleModalClose = this.handleModalClose.bind(this)
  }

  updateState(prop, val) {
    this.setState({ [prop]: val })
  }

  handleSubmit(e) {
    e.preventDefault()
    const { email, password, rememberMe } = this.state

    // There are no form errors, time to log in the guest
    this.props.logInFn({ email, password, rememberMe })
    this.setState({ email: '', password: '' })
  }

  handleModalClose() {
    this.setState({ modalOpen: false })
  }

  toggleRememberMe = () => {
    this.setState({ rememberMe: !this.state.rememberMe })
  }

  render() {
    const { email, password } = this.state

    return (
      <section className="Header-guest-container">
        <div className="Header-right-top">
          <form onSubmit={this.handleSubmit}>
            <input
              className="Header-right-input-text mr-4"
              placeholder="Enter your email..."
              type="email"
              autoComplete="current-email"
              onChange={e => this.updateState('email', e.target.value)}
              value={email}
              required
            />

            <input
              className="Header-right-input-text mr-4"
              placeholder="Password"
              type="password"
              autoComplete="current-password"
              onChange={e => this.updateState('password', e.target.value)}
              value={password}
              required
            />

            <button className="button-action button-blue mr-4" type="submit">
              GO
            </button>

            <button className="button-action button-orange" type="submit">
              REGISTER
            </button>
          </form>
        </div>

        <div className="Header-right-bottom">
          <input
            type="checkbox"
            id="Header-remember-checkbox"
            onChange={this.toggleRememberMe}
          />
          <label htmlFor="Header-remember-checkbox">Remember Me?</label>

          <span style={{ marginLeft: '20px' }}>Reset Password</span>
        </div>

        <Modal
          open={this.state.modalOpen}
          onClose={this.handleModalClose}
          center
          style={{ width: '1000px' }}
        >
          <ErrorModal errors={this.state.errors} />
        </Modal>
      </section>
    )
  }
}
