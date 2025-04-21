//objetos - destructucring de dos o mas objetos
const producto = {
    nombre : 'Tablet',
    precio : 300,
    disponible : true
}
//console.log(producto)

//const cliente = {
//    nombre : 'Titon',
//    premium : true
//}

//error por mismo nombre de variable, hay que renombrar
//const {nombre} = producto
//const {nombre} = cliente

//const {nombre} = producto
//const {nombre: nombreCliente} = cliente

//console.log(nombre)
//console.log(nombreCliente)

const cliente = {
    nombre : 'Titon',
    premium : true,
    direccion : {
        calle : 'la calle',
        nro : 35
    }
}
const {nombre} = producto
//la siguiente linea hace error
//const {nombre : nombreCliente, direccion : calle} =cliente
//console.log(direccion)
//ahi si
const {nombre : nombreCliente, direccion : {calle}} =cliente
console.log(calle)