import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login } from '../../reducers/auth-reducer'

class Login extends Component {
  constructor() {
    super()

    this.state = {
      email: '',
      password: '',
      rememberMe: false
    }
  }

  updateState(prop, val) {
    this.setState({ [prop]: val })
  }

  handleSubmit = e => {
    e.preventDefault()
    const { history } = this.props
    const { email, password, rememberMe } = this.state

    this.props.login({ email, password, rememberMe }, history)
    this.setState({ email: '', password: '', rememberMe: false })
  }

  toggleRememberMe = () => {
    this.setState({ rememberMe: !this.state.rememberMe })
  }

  render() {
    const { email, password } = this.state

    return (
      <div className="Login-container">
        <section className="Login-content">
          <div className="Login-top">
            <h1>LOGIN</h1>
          </div>

          <div className="Login-bottom">
            <div className="Login-content-left">
              <form onSubmit={this.handleSubmit}>
                <input
                  style={{ width: '100%' }}
                  placeholder="Email"
                  onChange={e => this.updateState('email', e.target.value)}
                  value={email}
                  type="email"
                  name="email"
                  required
                  className="Login-content-text-input"
                />
                <input
                  style={{ width: '100%' }}
                  placeholder="Password"
                  onChange={e => this.updateState('password', e.target.value)}
                  value={password}
                  type="password"
                  name="password"
                  required
                  className="Login-content-text-input"
                />

                <input
                  type="checkbox"
                  id="Login-remember-checkbox"
                  onChange={this.toggleRememberMe}
                />
                <label htmlFor="Login-remember-checkbox">Remember Me?</label>

                <button>LOGIN</button>
              </form>
            </div>

            <div className="Login-content-right">
              <h1>New Player?</h1>
              <span>Don't have an account?</span>

              <button style={{ margin: '20px 0px 30px 0px' }}>
                REGISTER NOW
              </button>

              <h1>FORGOTTON YOUR PASSWORD?</h1>

              <button style={{ marginTop: '30px' }}>RESET PASSWORD</button>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default connect(state => state, { login })(Login)
