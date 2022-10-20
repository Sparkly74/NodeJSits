const { describe, it } = require('node:test')
var request = require('supertest')
var app = require('../index.js')

describe('GET /', ()=>{
    it('reponse avec Bonjour', ()=>{
        request(app).get('/').expect('{ "response": "Bonjour !!" }', done)
    })
})

describe('GET /retour', ()=>{
    it('reponse avec Bonjour', ()=>{
        request(app).get('/retour').expect('{ "response": "ça fonctionne" }', done)
    })
})