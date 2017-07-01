const express = require('express')
const router = express.Router()

let db = [
    {id: 1, name:"Edy Segura", email:"edysegura@gmail.com"},
    {id: 2, name:"Lidy Segura", email:"lidysegura@gmail.com"},
    {id: 3, name:"Renann Ponte", email:"renann.ponte@gmail.com"},
    {id: 4, name:"Leandro", email:"leandro@gmail.com"}
]

router.get('/', (request, response) => {
    response.json(db)
})

router.get('/:id', (request, response) => {
    let subscriber = db.find(sub => sub.id == request.params.id)
    if(subscriber) {
        response.json(subscriber)
    }
    else {
        response
        .status(404)
        .send('Not found!')
    }
})

router.post('/', (request, response) => {
    let newSubscriber = {
        id: db.length + 1,
        name: request.body.name,
        email: request.body.email
    }

    db.push(newSubscriber)

    response
    .status(201)
    .json(newSubscriber)
})

module.exports = router