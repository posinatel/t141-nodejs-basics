const {host, port} = require('./config.js')
const express = require('express')
const bodyParser = require('body-parser')

//setup
const app = express()
app.use(bodyParser.json())
//app.use(express.static('public'))

//publish HTML5 app
app.get('/', (request, response) => {
    response.send('Hi there!')
})

app.get('/about', (request, response) => {
    response.send('This is an express application')
})

//sever startup
app.listen(port, () => {
    console.log(`Server started at http://${host}:${port}`)
})