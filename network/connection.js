const config = require('../config')
const mysql = require("mysql2")

const pool = mysql.createPool({
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.bdname,
})

const connection = pool.promise()
if(connection) {
    console.log('Conectado a BD')
}

module.exports = { connection }
