/* Santiago Leonardi */
let arrayProductos = [
    { id: 1, nombre: "Crash Bandicoot 1", precio: 30000, img: "./src/productos/crash_Bandicoot_1.webp" },
    { id: 2, nombre: "Crash Bandicoot 2", precio: 50000, img: "./src/productos/crash_Bandicoot_2.jpg" },
    { id: 2, nombre: "Crash Bandicoot 2", precio: 50000, img: "./src/productos/crash_Bandicoot_2.jpg" },
    { id: 2, nombre: "Crash Bandicoot 2", precio: 50000, img: "./src/productos/crash_Bandicoot_2.jpg" },
    { id: 2, nombre: "Crash Bandicoot 2", precio: 50000, img: "./src/productos/crash_Bandicoot_2.jpg" },
    { id: 3, nombre: "Crash Bandicoot 3", precio: 45000, img: "./src/productos/crash_Bandicoot_3.webp" },
    { id: 3, nombre: "Crash Bandicoot 3", precio: 45000, img: "./src/productos/crash_Bandicoot_3.webp" },
    { id: 3, nombre: "Crash Bandicoot 3", precio: 45000, img: "./src/productos/crash_Bandicoot_3.webp" },
    { id: 3, nombre: "Crash Bandicoot 3", precio: 45000, img: "./src/productos/crash_Bandicoot_3.webp" },
    { id: 3, nombre: "Crash Bandicoot 3", precio: 45000, img: "./src/productos/crash_Bandicoot_3.webp" },
    { id: 3, nombre: "Crash Bandicoot 3", precio: 45000, img: "./src/productos/crash_Bandicoot_3.webp" },
    { id: 3, nombre: "Crash Bandicoot 3", precio: 45000, img: "./src/productos/crash_Bandicoot_3.webp" },
    { id: 3, nombre: "Crash Bandicoot 3", precio: 45000, img: "./src/productos/crash_Bandicoot_3.webp" },
    { id: 3, nombre: "Crash Bandicoot 3", precio: 45000, img: "./src/productos/crash_Bandicoot_3.webp" },
    { id: 3, nombre: "Crash Bandicoot 3", precio: 45000, img: "./src/productos/crash_Bandicoot_3.webp" },
    { id: 3, nombre: "Crash Bandicoot 3", precio: 45000, img: "./src/productos/crash_Bandicoot_3.webp" },
    { id: 3, nombre: "Crash Bandicoot 3", precio: 45000, img: "./src/productos/crash_Bandicoot_3.webp" },
    { id: 3, nombre: "Crash Bandicoot 3", precio: 45000, img: "./src/productos/crash_Bandicoot_3.webp" },
    { id: 3, nombre: "Crash Bandicoot 3", precio: 45000, img: "./src/productos/crash_Bandicoot_3.webp" },
    { id: 3, nombre: "Crash Bandicoot 3", precio: 45000, img: "./src/productos/crash_Bandicoot_3.webp" },
];

var teclasGuardadas=document.getElementById("buscador");

//Busca por nombre
teclasGuardadas.addEventListener("keyup", function(event) {
    let texto = teclasGuardadas.value.toLowerCase();
    let productosFiltrados = arrayProductos.filter(producto => producto.nombre.toLowerCase().includes(texto));
    mostrarProductos(productosFiltrados);
});

//Buscar Por precio
/*teclasGuardadas.addEventListener("keyup", function(event) {
    let texto = teclasGuardadas.value.toLowerCase();
    let productosFiltrados = arrayProductos.filter(producto => producto.precio == texto);
    mostrarProductos(productosFiltrados);
});*/

function mostrarProductos(array) {
    let htmlProductos = "";
    for (let i = 0; i < array.length; i++) {
        console.log(array[i].nombre);
        htmlProductos += `<div class="tarjeta-producto">
                    <h2>${array[i].nombre}</h2>
                    <img src=${array[i].img}>
                    <p>Precio: $${array[i].precio}</p>
                    <button class="btn-agregar" data-id="${array[i].id}">Agregar al carrito</button>
                </div>`;
    }
    document.getElementById("contedor-productos").innerHTML = htmlProductos;
}

function init() {
    mostrarProductos(arrayProductos);

    
}

init()