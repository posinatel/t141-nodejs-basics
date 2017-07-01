const express = require('express')
const router = express.Router()

let db = [{
    id: 1,
    name: "Edy Segura",
    email: "edysegura@gmail.com"
}]
let sequence = 0

const notFound = function (response) {
    response
        .status(404)
        .send('Not found!')
}

router.get('/', (request, response) => {
    response.json(db)
})

router.get('/:id', (request, response) => {
    let subscriber = db.find(sub => sub.id == request.params.id)
    if (subscriber) {
        response.json(subscriber);
    }
    else {
        notFound(response);
    }
})

router.post('/', (request, response) => {
    var newSubscriber = {
        id: ++sequence,
        name: request.body.name,
        email: request.body.email
    };

    db.push(newSubscriber)

    response
        .status(201)
        .json(newSubscriber)
})

router.put('/:id', (request, response) => {
    var subscriber = db.find(sub => sub.id == request.params.id)
    if (subscriber) {
        subscriber.name = request.body.name || subscriber.name
        subscriber.email = request.body.email || subscriber.email
        response.json(subscriber)
    }
    else {
        notFound(response);
    }
})

router.delete('/:id', (request, response) => {
    var subscriberIndex = db.findIndex(sub => sub.id == request.params.id)
    if (subscriberIndex != -1) {
        db.splice(subscriberIndex, 1)
        response.send('Subscriber deleted')
    }
    else {
        notFound(response)
    }
});

module.exports = router