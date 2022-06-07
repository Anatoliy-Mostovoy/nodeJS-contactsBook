const Joi = require("joi");

const schemaContacts = Joi.object({
  name: Joi.string().min(2).max(10).required(),
  phone: Joi.number().integer().positive().min(10).required(),
  email: Joi.string().email().optional(),
});

const patternId = "\\w{8}-\\w{4}-\\w{4}-\\{12}";

const schemaId = Joi.object({
  id: Joi.string().pattern(new RegExp(patternId)).required(), //! RegExp - клас створення регулярок
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

module.exports = {
  validateContact: async (req, res, next) => {
    return await validate(schemaContacts, req.body, res, next);
  },
  validateId: async (req, res, next) => {
    return await validate(schemaId, req.params, res, next);
  },
};
