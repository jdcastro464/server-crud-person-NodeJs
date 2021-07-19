const store = require('./store')

module.exports = {

    obtenerPersons: () => {
        return new Promise(async (resolve, reject) => {

            const queryData = await store.getPersons()

            resolve(queryData)
        })
    },

    obtenerOnePerson: (id) => {
        return new Promise(async (resolve, reject) => {

            if (!id) {
                reject('Params Invalid')
                return false
            }

            const queryData = await store.getOnePerson(id)

            resolve(queryData)
        })
    },

    agregarPerson: (person) => {
        return new Promise(async (resolve, reject) => {

            if (!person) {
                reject('Params Invalid')
                return false
            }

            let cedulas = []

            for (let index = 0; index < person[0].length; index++) {
                cedulas.push([person[0][index][2]])
            }

            const validacion = await store.validateDocument(cedulas)

            if (validacion[0]['cont']) {
                reject('Documento(s) registrado(s)')
            } else {
                const queryData = await store.addPerson(person)

                resolve(queryData)
            }
        })
    },

    actualizarPerson: (persona) => {
        return new Promise(async (resolve, reject) => {
            if (!persona) {
                reject('Params Invalid')
                return false
            }

            const validacion = await store.validateDocument([persona.documento])

            if (validacion[0]['cont']) {
                reject('Documento(s) registrado(s)')
            } else {
                const queryData = await store.updatePerson(persona)

                resolve(queryData)
            }
        })
    },

    eliminarPerson: (persona) => {
        return new Promise(async (resolve, reject) => {
            if (!persona) {
                reject('Params Invalid')
                return false
            }

            const queryData = await store.deletePerson(persona)

            resolve(queryData)
        })
    },

}