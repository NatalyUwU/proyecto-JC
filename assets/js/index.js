const botonIzquierda = document.querySelector(".botonIzquierda"),
    botonDerecha = document.querySelector(".botonDerecha"),
    slider = document.querySelector("#slider"),
    carruselSection = document.querySelectorAll(".carruselSection");


botonIzquierda.addEventListener("click", e => moverIzquierda())
botonDerecha.addEventListener("click", e => moverDerecha())

let operacion = 0;
let posicion = 0;

function moverDerecha() {
    if (posicion >= carruselSection.length - 1) {
        operacion = 0;
        posicion = 0;
        slider.style.transform = `translate(-${operacion}%)`;
    }
    else {
        posicion++;

        operacion = operacion + 33.3;
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "all ease .6s";
    }
}

function moverIzquierda() {
    posicion--;
    if (posicion < 0) {
        posicion = carruselSection.length - 1;
        operacion = 66.6;
        slider.style.transform = `translate(-${operacion}%)`
    }
    else {
        operacion = operacion - 33.3
        slider.style.transform = `translate(-${operacion}%)`
        slider.style.transition = "all ease .6s"
    }
}