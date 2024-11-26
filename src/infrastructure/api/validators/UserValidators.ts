import Joi from 'joi';

export const createUserSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string()
        .email({ tlds: { allow: false } })
        .required()
        .messages({
            'string.email': 'Email must be a valid email address.',
        }),
    address: Joi.string().required(),
    phone: Joi.number().required(),
});

export const updateUserSchema = Joi.object({
    id: Joi.string().required(),
    name: Joi.string().optional().allow(''),
    email: Joi.string()
        .email({ tlds: { allow: false } })
        .optional()
        .messages({
            'string.email': 'Email must be a valid email address.',
        }),
    address: Joi.string().optional().allow(''),
    phone: Joi.number().optional(),
});
