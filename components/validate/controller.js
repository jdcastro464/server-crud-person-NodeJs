const store = require('./store')
const jwt = require('jsonwebtoken')
const crypto = require('crypto')

require('dotenv').config()

module.exports = {

    validarToken: (user, pass) => {
        return new Promise(async (resolve, reject) => {
            if (!user || !pass) {
                reject('Params Invalidate')
                return false
            }

            const hmac = crypto.createHmac("sha256", process.env.KEY_ENCRYPT)
            const content = hmac.update(pass)
            const cryptoContent = content.digest("hex")

            const queryValid = await store.comprobar_token(user, cryptoContent)

            if (queryValid[0]['cont']) {
                const payload = { check: true }

                const token = jwt.sign(payload, process.env.KEY, {
                    expiresIn: 3600
                })

                resolve({
                    message: 'El token está vigente por 1 hora',
                    token: token
                })
            } else {
                reject('Params Invalidate')
            }
        })
    },
    agregarUsuario: (usuario) => {
        return new Promise(async (resolve, reject) => {
            if (!usuario) {
                reject('Params Invalid')
                return false
            }

            const hmac = crypto.createHmac("sha256", process.env.KEY_ENCRYPT)
            const content = hmac.update(usuario.password)
            const cryptoContent = content.digest("hex")

            const value = await store.addUser(usuario.user, cryptoContent)

            resolve(value)
        })
    }

}