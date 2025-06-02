// Santiago Leonardi
function harcodearProductos() {
    return [
        { id: 1, nombre: "Crash Bandicoot 1", precio: 30000, img: "./src/productos/crash_Bandicoot_1.webp" },
        { id: 2, nombre: "Crash Bandicoot 2", precio: 50000, img: "./src/productos/crash_Bandicoot_2.jpg" },
        { id: 3, nombre: "Crash Bandicoot 3", precio: 45000, img: "./src/productos/crash_Bandicoot_3.webp" },
        { id: 4, nombre: "Carlos el Topo", precio: 15000, img: "./src/productos/Carlos_el_topo_que_gira.webp" },
        { id: 5, nombre: "Crash Bash", precio: 45000, img: "./src/productos/Crash_Bash.webp" },
        { id: 6, nombre: "Crash Team Racing", precio: 45000, img: "./src/productos/Crash_Team_Racing.png" },

    ];
}
function reproducirSonido(btn) {
    btn.addEventListener("click", function () {
        let sonido = new Audio("./src/musica/Crash_Bandicoot_Woah.mp3");
        sonido.play();
    })
};

function reproducirMusica(btn, audio, img) {
    btn.addEventListener("click", function () {
        if (audio.paused) {
            audio.play();
            img.src = "./src/web/Crash_Bailando.gif";
            btn.src = "./src/web/stop.png";
        } else {
            audio.pause();
            audio.currentTime = 0; // reinicia el audio
            btn.src = "./src/web/play.png";
            img.src = "./src/web/Crash_logo.png"
        }
        // Cuando termina el audio
        audio.addEventListener("ended", function () {
            btn.src = "./src/web/play.png";
            img.src = "./src/web/Crash_logo.png";
        });
    });
}
function mostrarProductos(array) {
    let htmlProductos = "";
    for (let i = 0; i < array.length; i++) {
        htmlProductos += `<div class="tarjeta-producto">
                    <h2>${array[i].nombre}</h2>
                    <img src=${array[i].img}>
                    <p>Precio: $${array[i].precio}</p>
                    <button class="btn-agregar" onclick="agregarAlCarrito(${array[i].id})" data-id="${array[i].id}">Agregar al carrito</button>
                </div>`;
    }
    document.getElementById("contedor-productos").innerHTML = htmlProductos;
}

function mostrarCarrito() {

    let htmlCarrito = "";
    for (let i = 0; i < arrayCarrito.length; i++) {
        htmlCarrito += `<div class="tarjeta-producto">
                    <h2>${arrayCarrito[i].nombre}</h2>
                    <img src=${arrayCarrito[i].img}>
                    <p>Precio: $${arrayCarrito[i].precio}</p>
                </div>`;
    }

    document.getElementById("contedor-carrito").innerHTML = htmlCarrito;
}

function mostrarPrecioTotal() {
    let htmlTotalCarrito = "";
    let total = 0;
    for (let i = 0; i < arrayCarrito.length; i++) {
        total += arrayCarrito[i].precio;
    }

    htmlTotalCarrito += `<div class="centrar">
                    <h3>Precio: $${total}</h3>
                </div>`;
    document.getElementById("total-carrito").innerHTML = htmlTotalCarrito;
}
function filtrarPorNombre(arrayProductos, textBox) {
    textBox.addEventListener("keyup", function (event) {
        let texto = textBox.value.toLowerCase();
        let productosFiltrados = arrayProductos.filter(producto => producto.nombre.toLowerCase().includes(texto));
        mostrarProductos(productosFiltrados);
    });
}

function buscarProductoPorId(id) {
    for (let i = 0; i < arrayProductos.length; i++) {
        if (arrayProductos[i].id == id) {
            return arrayProductos[i];
        }
    }
}
function agregarAlCarrito(id) {
    arrayCarrito.push(buscarProductoPorId(id));
    mostrarCarrito();
    mostrarPrecioTotal();
}

// Vareables globales Horibles
let arrayProductos = [];
let arrayCarrito = [];
function init() {
    arrayProductos = harcodearProductos();
    let teclasGuardadas = document.getElementById("buscador");
    let btnReproducirMusica = document.getElementById("btn-reproducir-musica");
    let imgLogo = document.getElementById("img-logo");
    let musica = new Audio("./src/musica/Crash_Bandicoot_1.mp3");

    mostrarProductos(arrayProductos);
    filtrarPorNombre(arrayProductos, teclasGuardadas);
    reproducirMusica(btnReproducirMusica, musica, imgLogo);
    reproducirSonido(imgLogo);
    mostrarCarrito();
}


init();  
