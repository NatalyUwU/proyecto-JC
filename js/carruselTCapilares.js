//mover elementos carrusel
document.addEventListener('DOMContentLoaded', function () {
    const botonIzquierda2 = document.querySelector(".botonIzquierda2"),
        botonDerecha2 = document.querySelector(".botonDerecha2"),
        slider2 = document.querySelector("#slider2"),
        carruselSection2 = document.querySelectorAll(".carruselSection2");




    botonIzquierda2.addEventListener("click", e => moverIzquierda())
    botonDerecha2.addEventListener("click", e => moverDerecha())

    let operacion = 0;
    let anchoImagen = 100 / carruselSection2.length;
    let posicion = 0;
    function moverDerecha() {
        // Detecta pantalla pequeña
        if (window.innerWidth <= 480) {
            if (posicion >= carruselSection2.length - 1) {
                operacion = 0;
                posicion = 0;
                slider2.style.transform = `translate(-${operacion}%)`;
            } else {
                posicion++;
                operacion += anchoImagen;
                slider2.style.transform = `translate(-${operacion}%)`;
                slider2.style.transition = "all ease .6s";
            }
        }
        // Detecta pantallas grandes
        else
            if (posicion >= carruselSection2.length - 2) {
                operacion = 0;
                posicion = 0;
                slider2.style.transform = `translate(-${operacion}%)`;
            } else {
                posicion++;
                operacion += anchoImagen;
                slider2.style.transform = `translate(-${operacion}%)`;
                slider2.style.transition = "all ease .6s";
            }
    }

    function moverIzquierda() {
        // Pantallas pequeñas (480px o menos)
        if (window.innerWidth <= 480) {
            posicion--;
            if (posicion < 0) {
                posicion = carruselSection2.length - 1;
                operacion = anchoImagen * (carruselSection2.length - 1);
                slider2.style.transform = `translate(-${operacion}%)`;
            } else {
                posicion--;
                operacion = anchoImagen * posicion; 
                slider2.style.transform = `translate(-${operacion}%)`;
                slider2.style.transition = "all ease .6s";
            }
        }
        // Pantallas más grandes
        else {
            posicion--;
            if (posicion < 0) {
                posicion = carruselSection2.length - 2;
                operacion = anchoImagen * (carruselSection2.length - 2);
                slider2.style.transform = `translate(-${operacion}%)`;
            } else {
                posicion--;
                operacion = anchoImagen * posicion;
                slider2.style.transform = `translate(-${operacion}%)`;
                slider2.style.transition = "all ease .6s";
            }
        }
    }
});

//mostrar elementos carrusel

//Elemetos carrusel cabello graso
const IconoGraso = document.getElementById('IconoGraso');
const carrusel1Tcapilares1 = document.getElementById('carrusel1Tcapilares1');
const carrusel1Tcapilares2 = document.getElementById('carrusel1Tcapilares2');
const carrusel1Tcapilares3 = document.getElementById('carrusel1Tcapilares3');

//Elemetos carrusel cabello seco
const IconoSeco = document.getElementById('IconoSeco');
const carrusel2Tcapilares1 = document.getElementById('carrusel2Tcapilares1');
const carrusel2Tcapilares2 = document.getElementById('carrusel2Tcapilares2');
const carrusel2Tcapilares3 = document.getElementById('carrusel2Tcapilares3');

//Elemetos carrusel Repolarizacion
const Repolarizacion = document.getElementById('Repolarizacion');
const carrusel3Tcapilares1 = document.getElementById('carrusel3Tcapilares1');
const carrusel3Tcapilares2 = document.getElementById('carrusel3Tcapilares2');
const carrusel3Tcapilares3 = document.getElementById('carrusel3Tcapilares3');

//Elemetos carrusel ampolletas
const carrusel1Tcapilares4 = document.getElementById('carrusel1Tcapilares4');
const carrusel1Tcapilares5 = document.getElementById('carrusel1Tcapilares5');
const carrusel1Tcapilares6 = document.getElementById('carrusel1Tcapilares6');

//Elemetos carrusel botones
const contenedorBotones2 = document.getElementById('contenedorBotones2');

//Animacion al dar clic en iconos
iconoC1 = document.querySelector(".iconoC1");
iconoC2 = document.querySelector(".iconoC2");
iconoC3 = document.querySelector(".iconoC3");
const iconos2 = [iconoC1, iconoC2, iconoC3];




// Función para mostrar cabello graso
IconoGraso.addEventListener('click', function () {
    //cabello graso
    carrusel1Tcapilares1.style.display = 'block';
    carrusel1Tcapilares2.style.display = 'block';
    carrusel1Tcapilares3.style.display = 'block';
    // cabello seco
    carrusel2Tcapilares1.style.display = 'none';
    carrusel2Tcapilares2.style.display = 'none';
    carrusel2Tcapilares3.style.display = 'none';
    //Repolarizacion
    carrusel3Tcapilares1.style.display = 'none';
    carrusel3Tcapilares2.style.display = 'none';
    carrusel3Tcapilares3.style.display = 'none';

    // ampolletas
    carrusel1Tcapilares4.style.display = 'block';
    carrusel1Tcapilares5.style.display = 'block';
    carrusel1Tcapilares6.style.display = 'block';

    //animacion icono
    iconos2.forEach(function (elemento) {
        elemento.style.border = 'none';
        elemento.style.boxShadow = 'none';
    });

    iconoC1.classList.add('rotar');
    iconoC1.style.border = '2px solid pink';
    iconoC1.style.borderRadius = '50%';
    iconoC1.style.boxShadow = '0 0 15px rgba(255, 0, 0, 0.5)';

    setTimeout(function () {
        iconoC1.classList.remove('rotar');
    }, 280);
});


    // Función para mostrar cabello seco
    IconoSeco.addEventListener('click', function () {
        // cabello seco
        carrusel2Tcapilares1.style.display = 'block';
        carrusel2Tcapilares2.style.display = 'block';
        carrusel2Tcapilares3.style.display = 'block';

        //cabello graso
        carrusel1Tcapilares1.style.display = 'none';
        carrusel1Tcapilares2.style.display = 'none';
        carrusel1Tcapilares3.style.display = 'none';

        //Repolarizacion
        carrusel3Tcapilares1.style.display = 'none';
        carrusel3Tcapilares2.style.display = 'none';
        carrusel3Tcapilares3.style.display = 'none';

        // ampolletas
        carrusel1Tcapilares4.style.display = 'block';
        carrusel1Tcapilares5.style.display = 'block';
        carrusel1Tcapilares6.style.display = 'block';

        //animacion icono
        iconos2.forEach(function (elemento) {
            elemento.style.border = 'none';
            elemento.style.boxShadow = 'none';
        });

        iconoC2.classList.add('rotar');
        iconoC2.style.border = '2px solid pink';
        iconoC2.style.borderRadius = '50%';
        iconoC2.style.boxShadow = '0 0 15px rgba(255, 0, 0, 0.5)';


        setTimeout(function () {
            iconoC2.classList.remove('rotar');
        }, 280);
    });

    // Función para mostrar repolarizacion
    Repolarizacion.addEventListener('click', function () {
        
        //Repolarizacion
        carrusel3Tcapilares1.style.display = 'block';
        carrusel3Tcapilares2.style.display = 'block';
        carrusel3Tcapilares3.style.display = 'block';

        // cabello seco
        carrusel2Tcapilares1.style.display = 'none';
        carrusel2Tcapilares2.style.display = 'none';
        carrusel2Tcapilares3.style.display = 'none';

        //cabello graso
        carrusel1Tcapilares1.style.display = 'none';
        carrusel1Tcapilares2.style.display = 'none';
        carrusel1Tcapilares3.style.display = 'none';

        // ampolletas
        carrusel1Tcapilares4.style.display = 'block';
        carrusel1Tcapilares5.style.display = 'block';
        carrusel1Tcapilares6.style.display = 'block';

        //animacion icono
        iconos2.forEach(function (elemento) {
            elemento.style.border = 'none';
            elemento.style.boxShadow = 'none';
        });

        iconoC3.classList.add('rotar');
        iconoC3.style.border = '2px solid pink';
        iconoC3.style.borderRadius = '50%';
        iconoC3.style.boxShadow = '0 0 15px rgba(255, 0, 0, 0.5)';

        setTimeout(function () {
            iconoC3.classList.remove('rotar');
        }, 280);

    });
