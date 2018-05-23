const Joi = require('joi')

module.exports = {
  schemas: {
    login: {
      body: {
        email: Joi.string()
          .email()
          .required(),
        password: Joi.string()
          .min(1)
          .required(),
        rememberMe: Joi.boolean().required()
      }
    },
    register: {
      body: {
        email: Joi.string()
          .email()
          .required(),
        password: Joi.string()
          .min(1)
          .required(),
        username: Joi.string()
          .min(1)
          .required()
      }
    }
  },
  options: {
    wantResponse: true,
    joiOptions: {
      abortEarly: false
    }
  }
}
