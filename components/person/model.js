const { connection } = require('../../network/connection')
const logger = require('../../network/log')

class Persons {
    constructor() {
        this.connection = connection;
    }

    async getPersons() {
        try {
            const [data, other_data] = await this.connection.query(`
            SELECT * FROM personas
            WHERE
            estado = 1
            `)
            return data
        } catch (error) {
            logger.error(`Error SQL Query: ${error.message}`);
            return []
        }
    }

    async getOnePerson(id) {
        try {
            const [data, other_data] = await this.connection.query(`
            SELECT * FROM personas
            WHERE
            id = ? AND
            estado = 1
            `, [id])
            return data
        } catch (error) {
            logger.error(`Error SQL Query: ${error.message}`);
            return []
        }
    }

    async addPerson(person) {
        try {
            const [data, other_data] = await this.connection.query(`
            INSERT INTO personas(nombre, apellido, documento, correo) 
            VALUES 
            ?
            `, person)
            return data
        } catch (error) {
            logger.error(`Error SQL Query: ${error.message}`);
            return []
        }
    }

    async validateDocument(documento) {
        try {
            const [data, other_data] = await this.connection.query(`
            SELECT COUNT(*) as cont FROM personas
            WHERE
            documento in ? AND
            estado = 1
            `, [[documento]])
            return data
        } catch (error) {
            logger.error(`Error SQL Query: ${error.message}`);
            return []
        }
    }

    async updatePerson(persona) {
        try {
            const [data, other_data] = await this.connection.query(`
            UPDATE personas SET nombre = ?, apellido = ?, documento = ?, correo = ?
            WHERE
            id = ?
            `, [persona.nombre, persona.apellido, persona.documento, persona.correo, persona.id])
            return data
        } catch (error) {
            logger.error(`Error SQL Query: ${error.message}`);
            return []
        }
    }

    async deletePerson(persona) {
        try {
            const [data, other_data] = await this.connection.query(`
            UPDATE personas SET estado = 2
            WHERE
            id = ?
            `, [persona.id])
            return data
        } catch (error) {
            logger.error(`Error SQL Query: ${error.message}`);
            return []
        }
    }
}

module.exports = Persons;