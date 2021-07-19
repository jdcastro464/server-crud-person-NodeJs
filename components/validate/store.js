const Validate = require('./model')

const validateClass = new Validate()

module.exports = {
    comprobar_token: async (user, pass) => {
        const result = await validateClass.verifyToken(user, pass)

        return result
    },

    addUser: async (user, pass) => {
        const result = await validateClass.addUser(user, pass)

        return result
    }
}
