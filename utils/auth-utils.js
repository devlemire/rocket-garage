const timeUtils = require('./time-utils')

module.exports = {
  addUserToSession: (session, user, rememberMe) => {
    if (!session.user) {
      session.user = user

      if (rememberMe) {
        session.cookie.maxAge = timeUtils.miliseconds.thirtyDays
      }
    }
  }
}
