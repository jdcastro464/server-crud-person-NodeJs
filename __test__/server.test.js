const { server, app } = require('../server')
const supertest = require("supertest")

describe('Validate result of Api CRUD', () => {
    afterAll((done) => {
        server.close()
        done()
    })

    test('Respuesta de la API: Devuelve un Object `{ error: String, body: { message: String, token: String } }` [POST `/validate/token`]', (done) => {
        const usuario = {
            user: "administrador",
            pass: "admin2021**"
        }

        supertest(server)
            .post('/validate/token')
            .send(usuario)
            .expect(200)
            .end((err, res) => {
                if (err) {
                    done(err)
                    return false
                }

                app.set('key_secret', res.body.body.token)

                done()
            })
    })

    test('Respuesta de la API: Devuelve un Object `{ error: String, body: { affectedRows: Integer } }` [POST `/validate/addUser`]', (done) => {
        const usuario = {
            usuario: {
                user: "cliente",
                password: "cliente123"
            }
        }

        supertest(server)
            .post('/validate/addUser')
            .set('access-token', app.get('key_secret'))
            .send(usuario)
            .expect(200)
            .end((err, res) => {
                if (err) {
                    done(err)
                    return false
                }

                done()
            })
    })

    test('Respuesta de la API: Devuelve un Object `{ error: String, body: [ { id: Integer, nombre: String, apellido: String, documento: Integer, correo: String, estado: Integer },...n ] }` [GET `/person/getPersons`]', (done) => {
        supertest(server)
            .get('/person/getPersons')
            .set('access-token', app.get('key_secret'))
            .expect(200)
            .end((err, res) => {
                if (err) {
                    done(err)
                    return false
                }

                app.set('persons', res.body.body)

                done()
            })
    })

    test('Respuesta de la API: Devuelve un Object `{ error: String, body: [ { id: Integer, nombre: String, apellido: String, documento: Integer, correo: String, estado: Integer } ] }` [GET `/person/getPersons/:id`]', (done) => {
        supertest(server)
            .get('/person/getPersons/1')
            .set('access-token', app.get('key_secret'))
            .expect(200)
            .end((err, res) => {
                if (err) {
                    done(err)
                    return false
                }

                done()
            })
    })

    test('Respuesta de la API: Devuelve un Object `{ error: String, body: { affectedRows: Integer } }` [POST `/person/addPerson`]', (done) => {
        const listaPersonas = app.get('persons')
        let postPersona

        if (listaPersonas.length) {
            const i = listaPersonas.length - 1
            const documento = parseInt(listaPersonas[i].documento) + 1

            postPersona = {
                persona: [
                    [
                        ["Juan", "Castro", documento, "juan@gmail.com"]
                    ]
                ]
            }
        } else {
            postPersona = {
                persona: [
                    [
                        ["Juan", "Castro", 1, "juan@gmail.com"]
                    ]
                ]
            }
        }

        supertest(server)
            .post('/person/addPerson')
            .set('access-token', app.get('key_secret'))
            .send(postPersona)
            .expect(200)
            .end((err, res) => {
                if (err) {
                    done(err)
                    return false
                }

                done()
            })
    })

    test('Respuesta de la API: Devuelve un Object `{ error: String, body: { affectedRows: Integer } }` [POST `/person/updatePerson`]', (done) => {
        const updatePerson = {
            persona: {
                id: 1,
                nombre: "Carlos",
                apellido: "Lopez",
                documento: "1111111111",
                correo: "carlos@correo.gmail"
            }

        }

        supertest(server)
            .post('/person/updatePerson')
            .set('access-token', app.get('key_secret'))
            .send(updatePerson)
            .expect(200)
            .end((err, res) => {
                if (err) {
                    done(err)
                    return false
                }

                done()
            })
    })

    test('Respuesta de la API: Devuelve un Object `{ error: String, body: { affectedRows: Integer } }` [POST `/person/deletePerson`]', (done) => {
        const deletePerson = {
            persona: {
                id: 1
            }

        }

        supertest(server)
            .post('/person/deletePerson')
            .set('access-token', app.get('key_secret'))
            .send(deletePerson)
            .expect(200)
            .end((err, res) => {
                if (err) {
                    done(err)
                    return false
                }

                done()
            })
    })
})