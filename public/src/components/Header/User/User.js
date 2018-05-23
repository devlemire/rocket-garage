import React, { Component } from 'react'

export default class User extends Component {
  render() {
    const { data } = this.props
    return (
      <section className="User-container">
        <input className="User-search-input" placeholder="Search..." />
        <img className="User-profile-picture" src={data.profile_picture} />
        <span className="User-name">{data.username}</span>
        <span className="User-dropdown">
          <i class="fas fa-angle-down" />
        </span>
      </section>
    )
  }
}
