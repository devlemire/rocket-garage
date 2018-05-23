import React from 'react'

export default function ActionMenu({ logOutFn }) {
  return (
    <section className="ActionMenu-container">
      <ul className="ActionMenu-list">
        <li onClick={logOutFn}>LOGOUT</li>
      </ul>
    </section>
  )
}
