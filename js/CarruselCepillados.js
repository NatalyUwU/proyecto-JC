//mover elementos carrusel
document.addEventListener('DOMContentLoaded', function () {
    const botonIzquierda3 = document.querySelector(".botonIzquierda3"),
        botonDerecha3 = document.querySelector(".botonDerecha3"),
        slider3 = document.querySelector("#slider3"),
        carruselSection3 = document.querySelectorAll(".carruselSection3");


    let operacion = 0;
    let anchoImagen = 100 / carruselSection3.length; // calcular el ancho de cada imagen para que se vea cada una de las imagenes
    let posicion = 0;

    //Funcion para mover a la derecha
    botonDerecha3.addEventListener("click", function () {

        // Detecta pantalla pequeña
        if (window.innerWidth <= 480) {
            //si estamos en la ultima imagen y volvemos a dar click hacia la derecha nos devolvera a la primera imagen
            if (posicion >= carruselSection3.length - 1) {
                operacion = 0;
                posicion = 0;
                slider3.style.transform = `translate(-${operacion}%)`;

                //la posicion se aumentera de 1 en 1, a la operacion se le suma el ancho de cada imagen para que se muestre una por una al dar click, mientras la posicion sea menor el total de las imagenes
            } else {
                posicion++;
                operacion = operacion + anchoImagen;
                slider3.style.transform = `translate(-${operacion}%)`;
                slider3.style.transition = "all ease .6s";
            }
        }
        // Detecta pantallas grandes
        else
            //si estamos en la ultima imagen y volvemos a dar click hacia la derecha nos devolvera a la primera imagen
            if (posicion >= carruselSection3.length - 2) {
                operacion = 0;
                posicion = 0;
                slider3.style.transform = `translate(-${operacion}%)`;
                //la posicion se aumentera de 1 en 1, a la operacion se le suma el ancho de cada imagen para que se muestre una por una al dar click, mientras la posicion sea menor al total de las imagenes
            } else {
                posicion++;
                operacion = operacion + anchoImagen;
                slider3.style.transform = `translate(-${operacion}%)`;
                slider3.style.transition = "all ease .6s";
            }
    });


    botonIzquierda3.addEventListener("click", function () {
        // Pantallas pequeñas (480px o menos)
        if (window.innerWidth <= 480) {
            posicion--;
            //si estamos en la primera imagen y volvemos a dar click hacia la izquierda nos devolvera a la ultima imagen
            if (posicion < 0) {
                posicion = carruselSection3.length - 1; //posicion tiene el valor de la ultima imagen 
                operacion = anchoImagen * (carruselSection3.length - 1); //operacion calcula cual es el porcentaje al que equivale esa ultima imagen para despues desplazarlo hasta haya
                slider3.style.transform = `translate(-${operacion}%)`;

                //calcula a que porcetaje se debe desplazar 
            } else {
                operacion = anchoImagen * posicion;
                slider3.style.transform = `translate(-${operacion}%)`;
                slider3.style.transition = "all ease .6s";
            }
        }
        // Pantallas más grandes
        else {
            posicion--;
            //si estamos en la primera imagen y damo click a la izquierda nos manda a la ultima imagen
            if (posicion < 0) {
                posicion = carruselSection3.length - 2;
                operacion = anchoImagen * (carruselSection3.length - 2);
                slider3.style.transform = `translate(-${operacion}%)`;

                //calcula a que porcetaje se debe desplazar 
            } else {
                operacion = anchoImagen * posicion;
                slider3.style.transform = `translate(-${operacion}%)`;
                slider3.style.transition = "all ease .6s";
            }
        }
    });
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




