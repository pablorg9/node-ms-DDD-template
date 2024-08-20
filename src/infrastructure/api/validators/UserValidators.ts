import Joi from 'joi';

export const createUserSchema = Joi.object({
    id: Joi.number(),
    name: Joi.string().required(),
});
