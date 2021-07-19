const Joi = require('joi')
const Schemas = require('./Schemas')
const response = require('../network/response')

const jwt = require('jsonwebtoken')

require('dotenv').config()

module.exports = {
    validateSchemaToken: async (req, res, next) => {
        try {
            const value = await Schemas.schemaToken.validateAsync(req.body)
            next()
        } catch (err) {
            response.error(req, res, 'Params Invalid', 400, err.message)
        }
    },
    validateSchemaPerson: async (req, res, next) => {
        try {
            const value = await Schemas.schemaPerson.validateAsync(req.body)
            next()
        } catch (err) {
            response.error(req, res, 'Params Invalid', 400, err.message)
        }
    },
    comprobarTokenHeader: (req, res, next) => {
        const token = req.headers['access-token'];

        if (token) {
            jwt.verify(token, process.env.KEY, (err, decoded) => {
                if (err) {
                    response.error(req, res, 'Token inválida', 400, err.message)
                } else {
                    req.decoded = decoded;
                    next();
                }
            });
        } else {
            response.error(req, res, 'Token no proveída.', 400, 'Token no proveída.')
        }
    },
    validateSchemaUpdatePerson: async (req, res, next) => {
        try {
            const value = await Schemas.schemaUpdatePerson.validateAsync(req.body)
            next()
        } catch (err) {
            response.error(req, res, 'Params Invalid', 400, err.message)
        }
    },
    validateSchemaDeletePerson: async (req, res, next) => {
        try {
            const value = await Schemas.schemaDeletePerson.validateAsync(req.body)
            next()
        } catch (err) {
            response.error(req, res, 'Params Invalid', 400, err.message)
        }
    },
    validateSchemaUser: async (req, res, next) => {
        try {
            const value = await Schemas.schemaUser.validateAsync(req.body)
            next()
        } catch (err) {
            response.error(req, res, 'Params Invalid', 400, err.message)
        }
    }
}