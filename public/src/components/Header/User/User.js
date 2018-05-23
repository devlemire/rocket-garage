import React, { Component } from 'react'
import ActionMenu from './ActionMenu'

export default class User extends Component {
  render() {
    const { data, logOutFn } = this.props

    return (
      <section className="User-container">
        <input className="User-search-input" placeholder="Search..." />

        <div
          className="User-right"
          onMouseEnter={this.showActionMenu}
          onMouseLeave={this.hideActionMenu}
        >
          <img
            className="User-profile-picture"
            src={data.profile_picture}
            alt="profile"
          />

          <span className="User-name">{data.username}</span>

          <span className="User-dropdown">
            <i className="fas fa-angle-down" />
          </span>

          <ActionMenu logOutFn={logOutFn} />
        </div>
      </section>
    )
  }
}
