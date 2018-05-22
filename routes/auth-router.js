const Router = require('express').Router()
const authController = require('../controllers/auth-controller')
const authMiddleware = require('../middleware/auth-middleware')

Router.post('/login', authMiddleware, authController.login)
Router.post('/register', authMiddleware, authController.register)
Router.post('/logout', authController.logout)
Router.post('/check', authController.isLoggedIn)

module.exports = Router
