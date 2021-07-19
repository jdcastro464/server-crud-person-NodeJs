const Joi = require('joi')

module.exports = {
    schemaToken: Joi.object().keys({
        user: Joi.string().required(),
        pass: Joi.string().required()
    }),

    schemaPerson: Joi.object().keys({
        persona: Joi.array().items(
            Joi.array().items(
                Joi.array().items(
                    Joi.string().required(),
                    Joi.string().required(),
                    Joi.number().integer().required(),
                    Joi.string().email().required()
                ).min(4).max(4).required()
            ).min(1).max(5).required()
        )
    }),

    schemaUpdatePerson: Joi.object().keys({
        persona: Joi.object().keys({
            id: Joi.number().integer().required(),
            nombre: Joi.string().required(),
            apellido: Joi.string().required(),
            documento: Joi.number().integer().required(),
            correo: Joi.string().email().required()
        }).max(5).required()
    }),

    schemaDeletePerson: Joi.object().keys({
        persona: Joi.object().keys({
            id: Joi.number().integer().required()
        }).max(1).required()
    }),

    schemaUser: Joi.object().keys({
        usuario: Joi.object().keys({
            user: Joi.string().required(),
            password: Joi.string().required(),
        })
    }),
}