import { barcelona, roma, paris, londres } from './ciudades.js';

// Obtener los elementos del DOM
let enlaces = document.querySelectorAll('a');
let tituloElemento = document.getElementById('titulo');
let subtituloElemento = document.getElementById('subtitulo');
let parrafoElemento = document.getElementById('parrafo');
let precioElemento = document.getElementById('precio');

// Agregar un evento Clic a cada enlace
enlaces.forEach((enlace) => {
    enlace.addEventListener('click', function() {
        //Remover la clase active de todos los enlaces
        enlaces.forEach((enlace) => {
            enlace.classList.remove('active');
        });

        //Agregar la clase active en el enlace actual
        this.classList.add('active');

        //Obtener el contenido correspondiente segun el enlace
        let contenido = obtenerContenido(this.textContent);

        //Mostrar el contenido en el DOM
        tituloElemento.innerHTML = contenido.titulo;
        subtituloElemento.innerHTML = contenido.subtitulo;
        parrafoElemento.innerHTML = contenido.parrafo;
        precioElemento.innerHTML = contenido.precio;
    });
});

//Funcion para traer la informacion desde ciudades.js
function obtenerContenido(enlace) {
    let contenido = {
        "Barcelona": barcelona,
        "Roma": roma,
        "París": paris,
        "Londres": londres
    };
    return contenido[enlace];
}
