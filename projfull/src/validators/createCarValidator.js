import Joi from "joi";

const createCarValidator = Joi.object({
    mark: Joi.string().required().messages({

    }),
    model: Joi.string().required().messages({

    }),
    price: Joi.number().min(1000).max(1000000).required().messages({
        "string.min": "min 1000$",
        "string.max": "max 1000000$",
    }),
    year: Joi.number().min(1990).max(new Date().getFullYear()).required().messages({
        "string.min": "min 1990 year",
        "string.max": "max now year",
    }),
    power: Joi.string().trim().lowercase().required().messages({

    }),
    description: Joi.string().trim().lowercase().required().messages({

    }),
    city: Joi.string().required().messages({

    }),
    color: Joi.string().trim().lowercase().min(1).max(20).required().messages({
        "string.min": "min 1 letters",
        "string.max": "max 20 letters",
    }),
    transmission: Joi.string().required().messages({

    }),
    carNumber: Joi.string().trim().lowercase().min(1).max(20).required().messages({
        "string.min": "min 1 letters",
        "string.max": "max 20 letters",
    }),
    mileage: Joi.number().min(0).max(1000000).required().messages({
        "string.min": "min 0 mileage",
        "string.max": "max 1000000 mileages",
    }),
    numberOfOwners: Joi.number().min(1).max(100).required().messages({
        "string.min": "min 1 owner",
        "string.max": "max 100 owners",
    }),
    accident: Joi.string().trim().lowercase().min(1).max(20).required().messages({
        "string.min": "min 1 accident",
        "string.max": "max 20 accidents",
    }),
    engine: Joi.string().trim().lowercase().min(1).max(20).required().messages({
        "string.min": "min 1 letters",
        "string.max": "max 20 letters",
    }),
})
export {
    createCarValidator
}