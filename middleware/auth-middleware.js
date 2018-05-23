const { sanitizeBody } = require('../utils/auth-utils')

module.exports = (req, res, next) => {
  const errors = sanitizeBody(
    req.body,
    req.path.includes('register') ? true : false
  )
  if (errors.length > 0) return res.status(409).send(errors)

  next()
}
