const Joi = require("joi");

const newVillage = {
    body: Joi.object().keys({
        name: Joi.string().alphanum().min(3).max(30).required().messages({
            "any.required": "Village Name is required",
            "string.min": "Village Name should be at least 3 characters",
            "string.max": "Village Name should be at most 30 characters",
            "string.empty": "Village Name is required",
            "string.base": "Village Name should be characters only",
            "string.alphanum":
                "Village Name should not contain special characters",
        }),
    }),
};
module.exports = {
    newVillage,
};
