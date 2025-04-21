//objetos
const producto = {
    nombre : 'Tablet',
    precio : 300,
    disponible : true
}
//muestra todo hacia el lado
console.log(producto)

//muestra el tipo de dato
console.log(typeof producto)

//muestra como tabla
console.table(producto)

//muestra solo nombre
console.log(producto.precio)

//no es buena idea
const nombreProd = producto.nombre
console.log(nombreProd)

//mejor usa Destructuring
//const { nombre } = producto
//console.log(nombre)

const { nombre, precio, disponible } = producto
console.log(nombre)
console.log(producto)
console.log(disponible)

//object literal enhacement
const autenticado = true
const usuario = 'Popi'
const nuevoObjeto = {
    autenticado,
    usuario
}
console.log(nuevoObjeto)