const string = require('useful-string')
const _ = require('lodash')

_.times(4, () => {
    console.log("id: " + string.guid())
})

