//mover elementos carrusel
document.addEventListener('DOMContentLoaded', function () {
    // Conseguir los botones y las imágenes
    const botonIzquierda = document.querySelector(".botonIzquierda");
    const botonDerecha = document.querySelector(".botonDerecha");
    const slider = document.getElementById("slider");
    const carruselSection = document.querySelectorAll(".carruselSection");

    let posicion = 0; // Empezamos en el índice 0
    let anchoImagen = 100 / carruselSection.length; // Porcentaje de cada imagen

    // Función para mostrar las imágenes 
    function mostrarImagen(index) {
        // Movemos el contenedor  de imágenes horizontalmente a la posición correcta
        slider.style.transform = `translateX(-${index * anchoImagen}%)`;
    }

    // Función para ir hacia la izquierda
    botonIzquierda.addEventListener('click', () => {
        // Reducir la posición
        posicion--;
        if (window.innerWidth <= 480) {
            // Si estamos en la primera imagen (índice 0), ir a la última imagen
            if (posicion < 0) {
                posicion = carruselSection.length - 1; // Volver al final
            }
        } else {
            // Si estamos en la última imagen, ir a la primera
            if (posicion < 0) {
                posicion = carruselSection.length - 2;
            }
        }

        slider.style.transition = "all ease .6s";
        // Mostrar la imagen 
        mostrarImagen(posicion);
        actualizarIndicadores(posicion);
    });

    // Función para ir hacia la derecha
    botonDerecha.addEventListener('click', () => {
        // Aumentar la posición
        posicion++;

        if (window.innerWidth <= 480) {
            // Si estamos en la última imagen, ir a la primera
            if (posicion >= carruselSection.length) {
                posicion = 0; // Volver al principio
            }
        } else {
            // Si estamos en la última imagen, ir a la primera
            if (posicion >= carruselSection.length - 1) {
                posicion = 0; // Volver al principio
            }
        }
        slider.style.transition = "all ease .6s";
        // Mostrar la diapositiva correspondiente
        mostrarImagen(posicion);
        actualizarIndicadores(posicion);
    });

    //mostrar elementos carrusel

    //Elemetos carrusel peinados boda
    const iconoBoda = document.getElementById('IconoBoda');
    const carrusel1Peinados1de1 = document.getElementById('carrusel1Peinados1de1');
    const carrusel1Peinados2de1 = document.getElementById('carrusel1Peinados2de1');
    const carrusel1Peinados1de2 = document.getElementById('carrusel1Peinados1de2');
    const carrusel1Peinados2de2 = document.getElementById('carrusel1Peinados2de2');
    //Elemetos carrusel peinados elegantes
    const IconoElegante = document.getElementById('IconoElegante');
    const carrusel2Peinados1de1 = document.getElementById('carrusel2Peinados1de1');
    const carrusel2Peinados2de1 = document.getElementById('carrusel2Peinados2de1');
    const carrusel2Peinados1de2 = document.getElementById('carrusel2Peinados1de2');
    const carrusel2Peinados2de2 = document.getElementById('carrusel2Peinados2de2');

    //Elemetos carrusel peinados niña
    const IconoNiña = document.getElementById('IconoNiña');
    const carrusel3Peinados1de1 = document.getElementById('carrusel3Peinados1de1');
    const carrusel3Peinados2de1 = document.getElementById('carrusel3Peinados2de1');
    const carrusel3Peinados1de2 = document.getElementById('carrusel3Peinados1de2');
    const carrusel3Peinados2de2 = document.getElementById('carrusel3Peinados2de2');

    //Elemetos carrusel botones
    const contenedorBotones = document.getElementById('contenedorBotones');

    //Animacion al dar clic en iconos
    iconoP1 = document.querySelector(".iconoP1");
    iconoP2 = document.querySelector(".iconoP2");
    iconoP3 = document.querySelector(".iconoP3");
    const iconos = [iconoP1, iconoP2, iconoP3];




    // Función para mostrar peinados boda
    iconoBoda.addEventListener('click', function () {
        //boda
        carrusel1Peinados1de1.style.display = 'block';
        carrusel1Peinados2de1.style.display = 'block';
        carrusel1Peinados1de2.style.display = 'block';
        carrusel1Peinados2de2.style.display = 'block';
        //elegante
        carrusel2Peinados1de1.style.display = 'none';
        carrusel2Peinados2de1.style.display = 'none';
        carrusel2Peinados1de2.style.display = 'none';
        carrusel2Peinados2de2.style.display = 'none';
        //niña
        carrusel3Peinados1de1.style.display = 'none';
        carrusel3Peinados2de1.style.display = 'none';
        carrusel3Peinados1de2.style.display = 'none';
        carrusel3Peinados2de2.style.display = 'none';

        //animacion icono
        iconos.forEach(function (elemento) {
            elemento.style.border = 'none';
            elemento.style.boxShadow = 'none';
        });

        iconoP1.classList.add('rotar');
        iconoP1.style.border = '2px solid pink';
        iconoP1.style.borderRadius = '50%';
        iconoP1.style.boxShadow = '0 0 15px rgba(255, 0, 0, 0.5)';

        setTimeout(function () {
            iconoP1.classList.remove('rotar');
        }, 280);
    });


    // Función para mostrar peinados elegantes
    IconoElegante.addEventListener('click', function () {
        //elegante
        carrusel2Peinados1de1.style.display = 'block';
        carrusel2Peinados2de1.style.display = 'block';
        carrusel2Peinados1de2.style.display = 'block';
        carrusel2Peinados2de2.style.display = 'block';
        //boda
        carrusel1Peinados1de1.style.display = 'none';
        carrusel1Peinados2de1.style.display = 'none';
        carrusel1Peinados1de2.style.display = 'none';
        carrusel1Peinados2de2.style.display = 'none';
        //niña
        carrusel3Peinados1de1.style.display = 'none';
        carrusel3Peinados2de1.style.display = 'none';
        carrusel3Peinados1de2.style.display = 'none';
        carrusel3Peinados2de2.style.display = 'none';
        //animacion icono
        iconos.forEach(function (elemento) {
            elemento.style.border = 'none'; // Elimina el borde
            elemento.style.boxShadow = 'none'; // Elimina la sombra, si deseas
        });

        iconoP2.classList.add('rotar');
        iconoP2.style.border = '2px solid pink';
        iconoP2.style.borderRadius = '50%';
        iconoP2.style.boxShadow = '0 0 15px rgba(255, 0, 0, 0.5)';


        setTimeout(function () {
            iconoP2.classList.remove('rotar');
        }, 280);
    });

    // Función para mostrar peinados niña
    IconoNiña.addEventListener('click', function () {
        //niña
        carrusel3Peinados1de1.style.display = 'block';
        carrusel3Peinados2de1.style.display = 'block';
        carrusel3Peinados1de2.style.display = 'block';
        carrusel3Peinados2de2.style.display = 'block';
        //boda
        carrusel1Peinados1de1.style.display = 'none';
        carrusel1Peinados2de1.style.display = 'none';
        carrusel1Peinados1de2.style.display = 'none';
        carrusel1Peinados2de2.style.display = 'none';
        //elegante
        carrusel2Peinados1de1.style.display = 'none';
        carrusel2Peinados2de1.style.display = 'none';
        carrusel2Peinados1de2.style.display = 'none';
        carrusel2Peinados2de2.style.display = 'none';
        //animacion icono

        iconos.forEach(function (elemento) {
            elemento.style.border = 'none'; // Elimina el borde
            elemento.style.boxShadow = 'none'; // Elimina la sombra, si deseas
        });

        iconoP3.classList.add('rotar');
        iconoP3.style.border = '2px solid pink';
        iconoP3.style.borderRadius = '50%';
        iconoP3.style.boxShadow = '0 0 15px rgba(255, 0, 0, 0.5)';

        setTimeout(function () {
            iconoP3.classList.remove('rotar');
        }, 280);

    });


    /*Indicadores de puntos*/

    const contenedorIndicadores = document.getElementById("indicadoresPeinados");
    const slides = slider.querySelectorAll(".carruselSection");

    let totalSlides;
    let i;

    if (window.innerWidth <= 480) {
        totalSlides = slides.length;
    } else {
        totalSlides = slides.length - 1;
    }

    //se crea un elemento span con clase punto y se le agrega como hijo al contenedor contenedorIndicadores, que es el div con id indicadoresPeinados
    for (i = 0; i < totalSlides; i++) {
        const indicador = document.createElement("span");
        indicador.classList.add("punto");
        if (i === 0) indicador.classList.add("active");
        contenedorIndicadores.appendChild(indicador);
    }

    //recorrera los elementos span que tienen clase punto y al punto en el que este actualmente se le agregara la clase active y a los que no esten seleccionados actualemnte se les quitara la clase
    function actualizarIndicadores(indiceActual) {
        const puntos = contenedorIndicadores.querySelectorAll(".punto");
        puntos.forEach((punto, i) => {
            if (i === indiceActual) {
                punto.classList.add("active");
            } else {
                punto.classList.remove("active");
            }
        });
    }

});
