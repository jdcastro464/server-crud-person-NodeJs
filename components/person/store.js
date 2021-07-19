const Persons = require('./model')

const personsClass = new Persons()

module.exports = {
    getPersons: async () => {
        const result = await personsClass.getPersons()

        return result
    },

    getOnePerson: async (id) => {
        const result = await personsClass.getOnePerson(id)

        return result
    },

    addPerson: async (person) => {
        const result = await personsClass.addPerson(person)

        return result
    },

    validateDocument: async (documento) => {
        const result = await personsClass.validateDocument(documento)

        return result
    },

    updatePerson: async (person) => {
        const result = await personsClass.updatePerson(person)

        return result
    },

    deletePerson: async (person) => {
        const result = await personsClass.deletePerson(person)

        return result
    }
}
