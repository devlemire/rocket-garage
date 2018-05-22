import React, { Component } from 'react'
import './App.css'
import Header from './Header'
import axios from 'axios'

class App extends Component {
  logout() {
    axios.post('/api/auth/logout')
  }

  render() {
    return (
      <div className="App">
        <Header />
        <span>I am app</span>
        <button onClick={this.logout}>LOGOUT YO!</button>
      </div>
    )
  }
}

export default App
