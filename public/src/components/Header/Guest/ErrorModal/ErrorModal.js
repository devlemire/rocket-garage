import React from 'react'

export default function errorModal({ errors }) {
  const errorListItems = errors.map((err, i) => <li key={`err-${i}`}>{err}</li>)

  return (
    <div>
      <h2 className="ErrorModal-title">
        We couldn't log you in. Please try fixing the following errors:
      </h2>

      <ul>{errorListItems}</ul>
    </div>
  )
}
