module.exports = {
  sanitizeBody: (body, registering) => {
    // Make sure the password is a string
    // Make sure the password has a length greater than 0 (for now)
    // Make sure the email is a string
    // Make sure the email has a length greater than 0 (for now)
    let errors = []

    const { email, username, password } = body

    if (!password || password.length === 0 || typeof password !== 'string') {
      errors.push('Password is not acceptable')
    }

    if (!email || email.length === 0 || typeof email !== 'string') {
      errors.push('Email is not acceptable')
    }

    if (registering) {
      if (!username || username.length === 0 || typeof username !== 'string') {
        errors.push('Username is not acceptable')
      }
    }

    return errors
  },
  addUserToSession: (session, user) => {
    if (!session.user) {
      session.user = user
    } else {
      console.log('A user is already on the session:', user)
    }
  }
}
