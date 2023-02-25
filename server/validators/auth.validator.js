const Joi = require("joi");

const login = {
    body: Joi.object().keys({
        username: Joi.string().alphanum().min(3).max(30).required().messages({
            "any.required": "Username is required",
            "string.min": "Username should be at least 3 characters",
            "string.max": "Username should be at most 30 characters",
            "string.empty": "Username is required",
            "string.base": "Username should be characters only",
            "string.alphanum": "Username should not contain special characters",
        }),
        password: Joi.string().min(5).max(50).required().messages({
            "any.required": "Password is required",
            "string.min": "Password should be at least 3 characters",
            "string.max": "Password should be at most 30 characters",
            "string.empty": "Password is required",
            "string.base": "Password should be characters only",
        }),
    }),
};
module.exports = {
    login,
};
