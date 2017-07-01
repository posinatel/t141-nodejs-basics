const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())
app.use(express.static('../public'))

app.get('/', (request, response) => {
    response.send("Hi there!")
})

const host = process.env.npm_package_config_host || "localhost"
const port = process.env.npm_package_config_port || 9000

app.listen(port, () => {
    console.log(`Server started at http://${host}:${port}`)
})