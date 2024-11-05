//mover elementos carrusel
document.addEventListener('DOMContentLoaded', function () {
    const botonIzquierda3 = document.querySelector(".botonIzquierda3"),
        botonDerecha3 = document.querySelector(".botonDerecha3"),
        slider3 = document.querySelector("#slider3"),
        carruselSection3 = document.querySelectorAll(".carruselSection3");




    botonIzquierda3.addEventListener("click", e => moverIzquierda())
    botonDerecha3.addEventListener("click", e => moverDerecha())

    let operacion = 0;
    let anchoImagen = 100 / carruselSection3.length;
    let posicion = 0;
    function moverDerecha() {
        // Detecta pantalla pequeña
        if (window.innerWidth <= 480) {
            if (posicion >= carruselSection3.length - 1) {
                operacion = 0;
                posicion = 0;
                slider3.style.transform = `translate(-${operacion}%)`;
            } else {
                posicion++;
                operacion += anchoImagen;
                slider3.style.transform = `translate(-${operacion}%)`;
                slider3.style.transition = "all ease .6s";
            }
        }
        // Detecta pantallas grandes
        else
            if (posicion >= carruselSection3.length - 2) {
                operacion = 0;
                posicion = 0;
                slider3.style.transform = `translate(-${operacion}%)`;
            } else {
                posicion++;
                operacion += anchoImagen;
                slider3.style.transform = `translate(-${operacion}%)`;
                slider3.style.transition = "all ease .6s";
            }
    }

    function moverIzquierda() {
        // Pantallas pequeñas (480px o menos)
        if (window.innerWidth <= 480) {
            posicion--;
            if (posicion < 0) {
                posicion = carruselSection3.length - 1;
                operacion = anchoImagen * (carruselSection3.length - 1);
                slider3.style.transform = `translate(-${operacion}%)`;
            } else {
                posicion--;
                operacion = anchoImagen * posicion;
                slider3.style.transform = `translate(-${operacion}%)`;
                slider3.style.transition = "all ease .6s";
            }
        }
        // Pantallas más grandes
        else {
            posicion--;
            if (posicion < 0) {
                posicion = carruselSection3.length - 2;
                operacion = anchoImagen * (carruselSection3.length - 2);
                slider3.style.transform = `translate(-${operacion}%)`;
            } else {
                posicion--;
                operacion = anchoImagen * posicion;
                slider3.style.transform = `translate(-${operacion}%)`;
                slider3.style.transition = "all ease .6s";
            }
        }
    }
});

//mostrar elementos carrusel

//Elemetos carrusel cabello liso
const IconoCabelloLiso = document.getElementById('IconoCabelloLiso');
const carrusel1Cepillados1 = document.getElementById('carrusel1Cepillados1');
const carrusel1Cepillados2 = document.getElementById('carrusel1Cepillados2');
const carrusel1Cepillados3 = document.getElementById('carrusel1Cepillados3');
const carrusel1Cepillados4 = document.getElementById('carrusel1Cepillados4');

//Elemetos carrusel cabello Rizado
const IconoCabelloRizado = document.getElementById('IconoCabelloRizado');
const carrusel2Cepillados1 = document.getElementById('carrusel2Cepillados1');
const carrusel2Cepillados2 = document.getElementById('carrusel2Cepillados2');
const carrusel2Cepillados3 = document.getElementById('carrusel2Cepillados3');

//Animacion al dar clic en iconos
iconoCepillado1 = document.querySelector(".iconoCepillado1");
iconoCepillado2 = document.querySelector(".iconoCepillado2");
const iconos3 = [iconoCepillado1, iconoCepillado2];




// Función para mostrar cabello liso
IconoCabelloLiso.addEventListener('click', function () {
    //cabello liso
    carrusel1Cepillados1.style.display = 'block';
    carrusel1Cepillados2.style.display = 'block';
    carrusel1Cepillados3.style.display = 'block';
    carrusel1Cepillados4.style.display = 'block';
    // cabello rizado
    carrusel2Cepillados1.style.display = 'none';
    carrusel2Cepillados2.style.display = 'none';
    carrusel2Cepillados3.style.display = 'none';


    //animacion icono
    iconos3.forEach(function (elemento) {
        elemento.style.border = 'none';
        elemento.style.boxShadow = 'none';
    });

    iconoCepillado1.classList.add('rotar');
    iconoCepillado1.style.border = '2px solid pink';
    iconoCepillado1.style.borderRadius = '50%';
    iconoCepillado1.style.boxShadow = '0 0 15px rgba(255, 0, 0, 0.5)';

    setTimeout(function () {
        iconoCepillado1.classList.remove('rotar');
    }, 280);
});


// Función para mostrar cabello Rizado
IconoCabelloRizado.addEventListener('click', function () {

    // cabello rizado
    carrusel2Cepillados1.style.display = 'block';
    carrusel2Cepillados2.style.display = 'block';
    carrusel2Cepillados3.style.display = 'block';

    //cabello liso
    carrusel1Cepillados1.style.display = 'block';
    carrusel1Cepillados2.style.display = 'none';
    carrusel1Cepillados3.style.display = 'none';
    carrusel1Cepillados4.style.display = 'none';


    //animacion icono
    iconos3.forEach(function (elemento) {
        elemento.style.border = 'none';
        elemento.style.boxShadow = 'none';
    });

    iconoCepillado2.classList.add('rotar');
    iconoCepillado2.style.border = '2px solid pink';
    iconoCepillado2.style.borderRadius = '50%';
    iconoCepillado2.style.boxShadow = '0 0 15px rgba(255, 0, 0, 0.5)';


    setTimeout(function () {
        iconoCepillado2.classList.remove('rotar');
    }, 280);
});




