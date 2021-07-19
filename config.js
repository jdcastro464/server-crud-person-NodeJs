require('dotenv').config()

const config = {
    host: process.env.HOST_BD || 'localhost',
    port: process.env.PORT_BD || 3306,
    user: process.env.USER_BD || 'root',
    password: process.env.PASSWORD_BD || '',
    bdname: process.env.BASENAME_BD || 'test_crud'
}

module.exports = config