const { connection } = require('../../network/connection')
const logger = require('../../network/log')

class Validate {
    constructor() {
        this.connection = connection;
    }

    async verifyToken(user, pass) {
        try {
            const [data, other_data] = await this.connection.query(`
            SELECT COUNT(*) as cont FROM users_token
            WHERE
            _users = ? AND 
            _password = ?
            `, [user, pass])
            return data
        } catch (error) {
            logger.error(`Error SQL Query: ${error.message}`);
            return []
        }
    }

    async addUser(user, pass) {
        try {
            const [data, other_data] = await this.connection.query(`
            INSERT INTO users_token(_users, _password) VALUES (?,?)
            `, [user, pass])
            return data
        } catch (error) {
            logger.error(`Error SQL Query: ${error.message}`);
            return []
        }
    }
}

module.exports = Validate;