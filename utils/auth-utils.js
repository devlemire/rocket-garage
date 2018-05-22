module.exports = {
  sanitizeBody: body => {
    // Make sure the password is a string
    // Make sure the password has a length greater than 0 (for now)
    // Make sure the email is a string
    // Make sure the email has a length greater than 0 (for now)
    let errors = []

    try {
      const { email, password } = body

      if (!password || password.length === 0 || typeof password !== 'string') {
        errors.push('Password is not acceptable')
      }

      if (!email || email.length === 0 || typeof email !== 'string') {
        errors.push('Email is not acceptable')
      }

      return errors
    } catch (err) {
      errors.push('Email or password is missing')
      return errors
    }
  },
  addUserToSession: (session, user) => {
    if (!session.user) {
      console.log('Adding logged in user to the session:', user)
      session.user = user
    } else {
      console.log('A user is already on the session:', user)
    }
  }
}
