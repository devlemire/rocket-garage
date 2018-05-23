const Router = require('express').Router()
const authController = require('../controllers/auth-controller')
const expressJoi = require('express-joi-middleware')
const joiUtils = require('../utils/joi-utils')

Router.post(
  '/login',
  expressJoi(joiUtils.schemas.login, joiUtils.options),
  authController.login
)

Router.post(
  '/register',
  expressJoi(joiUtils.schemas.register, joiUtils.options),
  authController.register
)

Router.post('/logout', authController.logout)
Router.post('/check', authController.isLoggedIn)

module.exports = Router
