const express = require('express')
const router = express.Router()

const Middleware = require('../../services/Middleware')
const response = require('../../network/response')
const controller = require('./controller')

router.get('/getPersons', Middleware.comprobarTokenHeader, (req, res) => {
    controller.obtenerPersons()
        .then((data) => {
            response.success(req, res, data, 200)
        })
        .catch(err => {
            response.error(req, res, err, 500, err)
        })
})

router.get('/getPersons/:id', Middleware.comprobarTokenHeader, (req, res) => {
    controller.obtenerOnePerson(req.params.id)
        .then((data) => {
            response.success(req, res, data, 200)
        })
        .catch(err => {
            response.error(req, res, err, 500, err)
        })
})

router.post('/addPerson', Middleware.comprobarTokenHeader, Middleware.validateSchemaPerson, (req, res) => {
    controller.agregarPerson(req.body.persona)
        .then((data) => {
            response.success(req, res, { affectedRows: data.affectedRows }, 200)
        })
        .catch(err => {
            response.error(req, res, err, 500, err)
        })
})

router.post('/updatePerson', Middleware.comprobarTokenHeader, Middleware.validateSchemaUpdatePerson, (req, res) => {
    controller.actualizarPerson(req.body.persona)
        .then((data) => {
            response.success(req, res, { affectedRows: data.affectedRows }, 200)
        })
        .catch(err => {
            response.error(req, res, err, 500, err)
        })
})

router.post('/deletePerson', Middleware.comprobarTokenHeader, Middleware.validateSchemaDeletePerson, (req, res) => {
    controller.eliminarPerson(req.body.persona)
        .then((data) => {
            response.success(req, res, { affectedRows: data.affectedRows }, 200)
        })
        .catch(err => {
            response.error(req, res, err, 500, err)
        })
})

module.exports = router