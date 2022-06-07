const Joi = require("joi");

const schemaContacts = Joi.object({
  name: Joi.string().min(1).max(20).required(),
  phone: Joi.number().integer().positive().min(10).max(11).required(),
  email: Joi.string().email().optional(),
});

const validate = async (schema, obj, res, next) => {
  try {
    await schema.validateAsync(obj);
    next();
  } catch (err) {
    console.log(err);
    res.status(400).json({ status: "error", code: 400, message: err.message });
  }
};

module.exports.validateContact = async (req, res, next) => {
  return await validate(schemaContacts, req.body, res, next);
};
