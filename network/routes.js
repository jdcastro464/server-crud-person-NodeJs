const validate = require('../components/validate/network')
const person = require('../components/person/network')

const routes = function (server) {
    server.use('/validate', validate)
    server.use('/person', person)
}

module.exports = routes