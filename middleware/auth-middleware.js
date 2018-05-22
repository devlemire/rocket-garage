const { sanitizeBody } = require('../utils/auth-utils')

module.exports = (req, res, next) => {
  const errors = sanitizeBody(req.body)
  if (errors.length > 0) return res.status(409).send(errors)

  next()
}
