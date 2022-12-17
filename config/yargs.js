const argv = require('yargs')
.options('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Es la base de la tabla de multiplicar'
})
.options('h', {
    alias: 'hasta',
    type: 'number',
    default: 10,
    describe: 'Este el número hasta donde quieres la tabla'
})
.options('l', {
    alias: 'listar',
    type: 'boolean',
    default: false,
    describe: 'Muestra la tabla en consola'
})
.check((argv, options) => {
    if (isNaN(argv.b)) {
        throw 'la base tiene que ser un número'
    }
    if (isNaN(argv.h)) {
        throw 'el límite tiene que ser un número'
    }
    return true
})
.argv

module.exports = argv