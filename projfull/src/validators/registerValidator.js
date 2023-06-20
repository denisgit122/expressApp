import Joi from "joi";

const registerValidator = Joi.object({
    email: Joi.string().regex(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/).required().messages({
        "string.pattern.base": "must contain @ and gmail.com"
    }),
    password: Joi.string().regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}/).required().messages({
        "string.pattern.base": "must contain lowercase letters, uppercase letters, and symbols, numbers"
    }),
    status: Joi.string().required().messages({}),
    name: Joi.string().min(2).max(17).required().messages({
            "string.min": "min 2 letters",
            "string.max": "max 17 letters",
        }),
    gender: Joi.string().required().messages({}),
    statusVip: Joi.string().required().messages({}),
})
export {
    registerValidator
}