document.addEventListener('DOMContentLoaded', function () {

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
                posicion = carruselSection.length - 1;
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
            if (posicion >= carruselSection.length ) {
                posicion = 0; // Volver al principio
            }
        }
        slider.style.transition = "all ease .6s";
        // Mostrar la diapositiva correspondiente
        mostrarImagen(posicion);
        actualizarIndicadores(posicion);
    });

    
    /*Indicadores de puntos*/

    const contenedorIndicadores = document.getElementById("indicadoresSobreLaEmpresa");
    const slides = slider.querySelectorAll(".carruselSection");

    let i;


    //se crea un elemento span con clase punto y se le agrega como hijo al contenedor contenedorIndicadores, que es el div con id indicadoresSobreLaEmpresa
    for (i = 0; i < slides.length; i++) {
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
