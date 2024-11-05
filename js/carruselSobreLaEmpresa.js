const botonIzquierda = document.querySelector(".botonIzquierda")
const botonDerecha = document.querySelector(".botonDerecha")
const slider = document.querySelector("#slider")
const carruselSection = document.querySelectorAll(".carruselSection")

   


botonIzquierda.addEventListener("click", e => moverIzquierda())
botonDerecha.addEventListener("click", e => moverDerecha())

let operacion = 0;
let anchoImagen = 100 / carruselSection.length;
let posicion = 0;

function moverDerecha() {
    if (posicion >= carruselSection.length-1) {
        operacion = 0;
        posicion = 0;
        slider.style.transform = `translate(-${operacion}%)`;
    }
    else {
        posicion++;
        operacion = operacion + anchoImagen;
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "all ease .6s";
    }
}

function moverIzquierda() {
    posicion--;
    if (posicion < 0) {
        posicion = carruselSection.length-1;
        operacion = anchoImagen * (carruselSection.length-1)
        slider.style.transform = `translate(-${operacion}%)`
    }
    else {
        operacion = operacion - anchoImagen;
        slider.style.transform = `translate(-${operacion}%)`
        slider.style.transition = "all ease .6s"
    }
}


