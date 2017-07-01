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

module.exports = router