/* Santiago Leonardi */
//obtiene los objetos del del html 
let boton = document.getElementById("btn1");
let div = document.getElementById("div");
let form = document.getElementById("form");
let h1 = document.getElementById("h1");
let p = document.getElementById("p1");

//Funcion saludar que escribe el texto y detiene la propagación del evento
function saludar(texto, event) {
    console.log("Texto: " + texto);
    event.stopPropagation(); // 🚫 Detiene la propagación al div padre
}

//Eventos para el botón, div y formulario
boton.addEventListener("click", function (event) {
    event.stopPropagation(); // 🚫 Detiene la propagación al div padre
    console.log("Botón presionado");
    h1.style.color = `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`;
    p.innerHTML = "<strong>" +p.innerHTML.split(" ").sort(() => 0.5 - Math.random()).join(" ")+"<strong>";
    // p.textContent = "<h1>HOLA?</h1>";
});

div.addEventListener("click", function (event) {
    saludar("Esto es el div", event);
});

form.addEventListener("submit", function (event) {
    event.preventDefault(); // 🚫 Evita el envío del formulario
    event.stopPropagation()
}); 


