const Joi = require("@hapi/joi");

const loginValidation = data => {
  const schema = Joi.object({
    email: Joi.string()
      .required()
      .email(),
    password: Joi.string()
      .required()
      .min(8)
  });
  return schema.validate(data);
};

const registerValidation = data => {
  const schema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    streetAddress: Joi.string().required(),
    city: Joi.string().required(),
    state: Joi.string().required(),
    zipCode: Joi.number().required(),
    email: Joi.string()
      .email()
      .required(),
    password: Joi.string().required()
  });
  return schema.validate(data);
};

module.exports.loginValidation = loginValidation;
module.exports.registerValidation = registerValidation;
