const express = require('express')
const app = express()
const server = require('http').Server(app)

const morgan = require('./network/morgan')
const logger = require('./network/log')
const body_parser = require('body-parser')
const cors = require('cors')

const routes = require('./network/routes')

require('dotenv').config()

app.use(morgan)
app.use(cors())
app.use(body_parser.json())
app.use(body_parser.urlencoded({ extended: false }))

app.set('keysecret', process.env.KEY);

routes(app)

server.listen(process.env.PORT_SERVER, () => {
    logger.info(`Servidor corriendo en ${process.env.ADDRESS_SERVER}:${process.env.PORT_SERVER}`)
})

module.exports = { server, app }