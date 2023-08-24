import Joi from "joi";

const adminValidator = Joi.object({
    email: Joi.string().regex(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/).required().messages({
        "string.pattern.base": "must contain @ and gmail.com"
    }),
    password: Joi.string().regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}/).messages({
        "string.pattern.base": "must contain lowercase letters, uppercase letters, and symbols, numbers"
    }),
    status: Joi.string().required(),
    name: Joi.string().min(2).max(50).trim(),
})
export {
    adminValidator
}