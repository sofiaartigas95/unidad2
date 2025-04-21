//objetos
const producto = {
    nombre : 'Tablet',
    precio : 300,
    disponible : true
}
console.log(producto)

//modificable pero sin nuevos elementos o ingresos
Object.seal(producto)

//hacerlo inmodificable
Object.freeze(producto) //desde aqui no se modifica

//modificar un elemento
producto.disponible =false
console.log(producto)

//agregar nuevo elemento
producto.imagen = 'fotitoPalInsta.jpg'
console.log(producto)

//elimiar un elemento
delete producto.precio
console.log(producto)


