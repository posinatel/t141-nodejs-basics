const express = require('express')
const bodyParser = require('body-parser')
const {host, port} = require('./config.js')

//setup
const app = express()
app.use(bodyParser.json())
app.use(express.static('public'))

//welcome
app.get('/', (request, response) => {
    response.redirect('./index.html')
})

//subscriber API
app.use('/api/subscribers', require('./subscriberApi'))

//server startup
app.listen(port, () => {
    console.log(`Server started at http://${host}:${port}`)
})