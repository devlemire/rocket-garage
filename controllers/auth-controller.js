const bcrypt = require('bcrypt')
const { sanitizeBody, addUserToSession } = require('../utils/auth-utils')

module.exports = {
  login: async (req, res) => {
    try {
      const db = req.app.get('db')
      const { email, password, rememberMe } = req.body

      // Make sure the user is not already logged in
      if (req.session.user) return res.status(409).send(req.session.user)

      // The user is not logged in at this point. Time to see if they have the right email/password combination
      // Find a user by email
      const [user] = await db.login({ email })

      // User will be undefined if not found by email
      if (!user) return res.status(409).send('Email not found')

      // Compare the password using bcrypt
      const passwordMatch = await bcrypt.compare(password, user.password)

      // passwordMatch will be false if an incorrect password is used
      if (!passwordMatch) return res.status(409).send('Password is incorrect')

      // No errors, user is logged in
      // Don't send the hashed password to the client
      delete user.password

      // Send back the user to the client & add the user to the session
      addUserToSession(req.session, user, rememberMe)
      res.status(200).send(user)
    } catch (err) {
      console.error('login method failed in auth-controller.js:', err)
      res.status(500).send(err)
    }
  },

  register: async (req, res) => {
    try {
      const db = req.app.get('db')
      const { email, username, password } = req.body

      // Make sure the user is not already logged in
      if (req.session.user) return res.status(409).send(req.session.user)

      // Hash the user's password
      const hashedPassword = await bcrypt.hash(password, 10)

      // Will go to catch block if email is taken or SQL fails
      // Destructure the returned array from the massive ORM
      const [user] = await db.register({
        email,
        username,
        password: hashedPassword
      })
      // Don't send the hashed password back to the client
      delete user.password

      // Send back the user to the requesting client && add them to the session
      addUserToSession(req.session, user, false)
      res.status(200).send(user)
    } catch (err) {
      console.error('register method failed in auth-controller.js:', err)
      res.status(500).send(err)
    }
  },

  logout: (req, res) => {
    try {
      req.session.destroy()
      res.status(200).send('Successfully logged out')
    } catch (err) {
      console.error('logout method failed in auth-controller.js:', err)
      res.status(500).send(err)
    }
  },

  isLoggedIn: (req, res) => {
    // req.session.user will only exist if a user has logged in through the login method
    if (req.session.user) {
      res.status(200).send(req.session.user)
    } else {
      res.status(403).send('Not logged in')
    }
  }
}
