const fs = require('fs')
const colors = require('colors')

const crearArchivo = async (base = 6, listar = false, h=10) => {

    try {
        let salida = ''
        let consola = ''

        for (let index = 1; index <= +h; index++) {
            salida += `${base} x ${index} = ${base * index}\n`
            consola += `${base} ${ 'x'.green } ${index} ${'='.green} ${base * index}\n`
        }

        console.log(salida)
        if (listar === true) {
            console.log('================'.magenta)
            console.log(`  Tabla del ${base}   `.green)
            console.log('================'.magenta)
            console.log(consola)
        }
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)
        return `tabla-${base}.txt`

    } catch (error) {
        throw 'Ocurrió un error'
    }

}
// const crearArchivo = (base = 6) => {

//     return new Promise((resolve, rejects) => {

//         let salida = ''

//         for (let index = 1; index < 11; index++) {
//             salida += `${base} * ${index} = ${base * index}\n`
//         }

//         console.log('================')
//         console.log(`  Tabla del ${base}   `)
//         console.log('================')
//         console.log(salida)
//         fs.writeFileSync(`tabla-${base}.txt`, salida)
//         resolve(`tabla-${base}.txt`)

//     })
// }

module.exports = {
    crearArchivo
}