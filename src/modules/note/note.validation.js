import Joi from "joi";

export const addNoteVal = Joi.object({
    title: Joi.string().min(2).max(1000).required(),
    description: Joi.string().min(2).max(3000).required(),
})

export const updateNoteVal = Joi.object({
    title: Joi.string().min(2).max(1000),
    description: Joi.string().min(2).max(3000),
    id: Joi.string().hex().length(24).required()
})