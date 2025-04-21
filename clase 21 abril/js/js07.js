const producto = {
    nombre : 'Tablet',
    precio : 300,
    disponible : true
}

const cliente = {
    nombre : 'Titon',
    premium : true
}

const carrito = {
    cantidad : 1,
    ...producto //spread operator
}

console.log(carrito)

const nuevoObjeto = {
    ...producto,
    ...cliente
}

console.log(nuevoObjeto)

//lo mismo que arriba pero mas corto
const nuevoObjeto2 = Object.assign(producto,cliente)
console.log(nuevoObjeto2)