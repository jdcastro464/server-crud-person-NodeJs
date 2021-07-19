const express = require('express')
const router = express.Router()

const Middleware = require('../../services/Middleware')
const response = require('../../network/response')
const controller = require('./controller')

router.post('/token', Middleware.validateSchemaToken, (req, res) => {
    controller.validarToken(req.body.user, req.body.pass)
        .then((data) => {
            response.success(req, res, data, 200)
        })
        .catch(err => {
            response.error(req, res, err, 500, err)
        })
})

router.post('/addUser', Middleware.comprobarTokenHeader, Middleware.validateSchemaUser, (req, res) => {
    controller.agregarUsuario(req.body.usuario)
        .then((data) => {
            response.success(req, res, { affectedRows: data.affectedRows }, 200)
        })
        .catch(err => {
            response.error(req, res, err, 500, err)
        })
})

module.exports = router