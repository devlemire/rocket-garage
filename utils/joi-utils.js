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
          .required(),
        confirmPassword: Joi.string()
          .min(1)
          .required(),
        region: Joi.string()
          .min(1)
          .required(),
        country: Joi.string()
          .min(1)
          .required(),
        needsParent: Joi.boolean().required(),
        parentEmail: Joi.string()
          .allow('')
          .optional(),
        notifyMe: Joi.boolean().required(),
        acceptedTerms: Joi.boolean()
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
