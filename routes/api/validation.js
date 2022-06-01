const Joi = require("joi");

const schemaContacts = Joi.object({
  name: Joi.string().alphanum().min(1).max(20).required(),
  phone: Joi.number().integer().positive().min(10).max(11).required(),
  email: Joi.string().email().optional(),
});

try {
  const value = await schema.validateAsync({
    username: "abc",
    birth_year: 1994,
  });
} catch (err) {}
