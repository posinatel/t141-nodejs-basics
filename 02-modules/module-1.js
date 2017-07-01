console.log('module 1')

let encapsulatedVariable = 'Xurupitas'

function sayHello(name = '') {
    console.log(`Hi ${name}!`)
}

function getEncapsulatedVar() {
    return encapsulatedVariable
}

//expose method sayHello
module.exports = {
    sayHello,
    getEncapsulatedVar,
    "name": "module-1"
}