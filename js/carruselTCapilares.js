//mover elementos carrusel
document.addEventListener('DOMContentLoaded', function () {
     // Conseguir los botones y las imágenes
     const botonIzquierda2 = document.querySelector(".botonIzquierda2");
     const botonDerecha2 = document.querySelector(".botonDerecha2");
     const slider2 = document.getElementById("slider2");
     const carruselSection2 = document.querySelectorAll(".carruselSection2");

 
     let posicion = 0; // Empezamos en el índice 0
     let anchoImagen = 100 / carruselSection2.length; // Porcentaje de cada imagen
 
     // Función para mostrar las imágenes 
     function mostrarImagen(index) {
         // Movemos el contenedor  de imágenes horizontalmente a la posición correcta
         slider2.style.transform = `translateX(-${index * anchoImagen}%)`;
     }
 
     // Función para ir hacia la izquierda
     botonIzquierda2.addEventListener('click', () => {
         // Reducir la posición
         posicion--;
         if (window.innerWidth <= 480) {
             // Si estamos en la primera imagen (índice 0), ir a la última imagen
             if (posicion < 0) {
                 posicion = carruselSection2.length - 1; // Volver al final
             }
         } else {
             // Si estamos en la última imagen, ir a la primera
             if (posicion < 0) {
                 posicion = carruselSection2.length - 2;
             }
         }
 
         slider2.style.transition = "all ease .6s";
         // Mostrar la imagen 
         mostrarImagen(posicion);
         actualizarIndicadores(posicion);
     });
 
     // Función para ir hacia la derecha
     botonDerecha2.addEventListener('click', () => {
         // Aumentar la posición
         posicion++;
 
         if (window.innerWidth <= 480) {
             // Si estamos en la última imagen, ir a la primera
             if (posicion >= carruselSection2.length) {
                 posicion = 0; // Volver al principio
             }
         } else {
             // Si estamos en la última imagen, ir a la primera
             if (posicion >= carruselSection2.length - 1) {
                 posicion = 0; // Volver al principio
             }
         }
         slider2.style.transition = "all ease .6s";
         // Mostrar la diapositiva correspondiente
         mostrarImagen(posicion);
         actualizarIndicadores(posicion);
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
  /*Indicadores de puntos*/

  const indicadoresTcapilares = document.getElementById("indicadoresTcapilares");
  const slides = slider2.querySelectorAll(".carruselSection2");

  let totalSlides;
  let i;

  if (window.innerWidth <= 480) {
      totalSlides = slides.length;
  } else {
      totalSlides = slides.length - 1;
  }

  //se crea un elemento span con clase punto y se le agrega como hijo al contenedor indicadoresTcapilares, que es el div con id indicadoresTcapilares
  for (i = 0; i < totalSlides; i++) {
      const indicador = document.createElement("span");
      indicador.classList.add("punto");
      if (i === 0) indicador.classList.add("active");
      indicadoresTcapilares.appendChild(indicador);
  }

  //recorrera los elementos span que tienen clase punto y al punto en el que este actualmente se le agregara la clase active y a los que no esten seleccionados actualemnte se les quitara la clase
  function actualizarIndicadores(indiceActual) {
      const puntos = indicadoresTcapilares.querySelectorAll(".punto");
      puntos.forEach((punto, i) => {
          if (i === indiceActual) {
              punto.classList.add("active");
          } else {
              punto.classList.remove("active");
          }
      });
  }

});

