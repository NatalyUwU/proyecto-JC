//mover elementos carrusel
document.addEventListener('DOMContentLoaded', function () {
    // Conseguir los botones y las imágenes
    const botonIzquierda3 = document.querySelector(".botonIzquierda3");
    const botonDerecha3 = document.querySelector(".botonDerecha3");
    const slider3 = document.getElementById("slider3");
    const carruselSection3 = document.querySelectorAll(".carruselSection3");

    let posicion = 0; // Empezamos en el índice 0
    let anchoImagen = 100 / carruselSection3.length; // Porcentaje de cada imagen

    // Función para mostrar las imágenes correctas
    function mostrarImagen(index) {
        // Movemos el contenedor de imágenes a la posición correcta
        slider3.style.transform = `translateX(-${index * anchoImagen}%)`;
    }

    // Función para ir a la imagen anterior
    botonIzquierda3.addEventListener('click', () => {
        // Reducir la posición
        posicion--;
        if (window.innerWidth <= 480) {
            // Si estamos en la primera imagen (índice 0), ir a la última imagen
            if (posicion < 0) {
                posicion = carruselSection3.length - 1; // Volver al final
            }
        } else {
            // Si estamos en la última imagen, ir a la primera
            if (posicion < 0) {
                posicion = carruselSection3.length - 2;
            }
        }

        slider3.style.transition = "all ease .6s";
        // Mostrar la imagen 
        mostrarImagen(posicion);
        actualizarIndicadores(posicion);
    });

    // Función para ir a la imagen siguiente
    botonDerecha3.addEventListener('click', () => {
        // Aumentar la posición
        posicion++;

        if (window.innerWidth <= 480) {
            // Si estamos en la última imagen, ir a la primera
            if (posicion >= carruselSection3.length) {
                posicion = 0; // Volver al principio
            }
        } else {
            // Si estamos en la última imagen, ir a la primera
            if (posicion >= carruselSection3.length - 1) {
                posicion = 0; // Volver al principio
            }
        }

        slider3.style.transition = "all ease .6s";
        // Mostrar la imagen correspondiente
        mostrarImagen(posicion);
        actualizarIndicadores(posicion);
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

 /*Indicadores de puntos*/

 const indicadoresCepillado = document.getElementById("indicadoresCepillado");
 const slides = slider3.querySelectorAll(".carruselSection3");

 let totalSlides;
 let i;

 if (window.innerWidth <= 480) {
     totalSlides = slides.length;
 } else {
     totalSlides = slides.length - 1;
 }

 //se crea un elemento span con clase punto y se le agrega como hijo al contenedor indicadoresCepillado, que es el div con id indicadoresCepillado
 for (i = 0; i < totalSlides; i++) {
     const indicador = document.createElement("span");
     indicador.classList.add("punto");
     if (i === 0) indicador.classList.add("active");
     indicadoresCepillado.appendChild(indicador);
 }

 //recorrera los elementos span que tienen clase punto y al punto en el que este actualmente se le agregara la clase active y a los que no esten seleccionados actualemnte se les quitara la clase
 function actualizarIndicadores(indiceActual) {
     const puntos = indicadoresCepillado.querySelectorAll(".punto");
     puntos.forEach((punto, i) => {
         if (i === indiceActual) {
             punto.classList.add("active");
         } else {
             punto.classList.remove("active");
         }
     });
 }

});




