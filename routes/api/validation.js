const Joi = require("joi");

const schemaContacts = Joi.object({
  name: Joi.string().min(1).max(20).required(),
  phone: Joi.number().integer().positive().min(10).max(11).required(),
  email: Joi.string().email().optional(),
});

const validate = (schema, obj, res, next) => {};
