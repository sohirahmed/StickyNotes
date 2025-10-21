import Joi from "joi"

export const signUpVal = Joi.object({
    name: Joi.string().min(2).max(20).required(),
    email: Joi.string().pattern(/^[a-zA-Z0-9_.]{3,200}@(gmail|yahoo)\.com$/).required(),
    password: Joi.string().pattern(/^[A-Z][A-Za-z0-9]{8,40}$/).message("password must be matched").required(),
    rePassword: Joi.valid(Joi.ref('password')).required(),
    age: Joi.number().min(8).max(80).required(),
})


export const sinInVal = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().pattern(/^[A-Z][A-Za-z0-9]{8,40}$/).message("password must be matched").required(),
})