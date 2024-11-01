const botonIzquierda = document.querySelector(".botonIzquierda"),
    botonDerecha = document.querySelector(".botonDerecha"),
    slider = document.querySelector("#slider"),
    carruselSection = document.querySelectorAll(".carruselSection");

   


botonIzquierda.addEventListener("click", e => moverIzquierda())
botonDerecha.addEventListener("click", e => moverDerecha())

let operacion = 0;
let anchoImagen = 100 / carruselSection.length;
let posicion = 0;
function moverDerecha() {
    // Detecta pantalla pequeña
    if (window.innerWidth <= 480) {
        if (posicion >= carruselSection.length - 1) {
            operacion = 0;
            posicion = 0;
            slider.style.transform = `translate(-${operacion}%)`;
        } else {
            posicion++;
            operacion += anchoImagen;
            slider.style.transform = `translate(-${operacion}%)`;
            slider.style.transition = "all ease .6s";
        }
    } 
    // Detecta pantallas grandes
    else 
        if (posicion >= carruselSection.length - 2) {
            operacion = 0;
            posicion = 0;
            slider.style.transform = `translate(-${operacion}%)`;
        } else {
            posicion++;
            operacion += anchoImagen;
            slider.style.transform = `translate(-${operacion}%)`;
            slider.style.transition = "all ease .6s";
        }
    }

function moverIzquierda() {
    // Pantallas pequeñas (480px o menos)
    if (window.innerWidth <= 480) {
        posicion--;
        if (posicion < 0) {
            posicion = carruselSection.length - 1;
            operacion = anchoImagen * (carruselSection.length - 1);
            slider.style.transform = `translate(-${operacion}%)`;
        } else {
            operacion -= anchoImagen;
            slider.style.transform = `translate(-${operacion}%)`;
            slider.style.transition = "all ease .6s";
        }
    } 
    // Pantallas más grandes
    else {
        posicion--;
        if (posicion < 0) {
            posicion = carruselSection.length - 2;
            operacion = anchoImagen * (carruselSection.length - 2);
            slider.style.transform = `translate(-${operacion}%)`;
        } else {
            operacion -= anchoImagen;
            slider.style.transform = `translate(-${operacion}%)`;
            slider.style.transition = "all ease .6s";
        }
    }
}
