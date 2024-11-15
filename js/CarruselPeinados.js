//mover elementos carrusel
document.addEventListener('DOMContentLoaded', function () {
    const botonIzquierda = document.querySelector(".botonIzquierda"),
        botonDerecha = document.querySelector(".botonDerecha"),
        slider = document.querySelector("#slider"),
        carruselSection = document.querySelectorAll(".carruselSection");



    let operacion = 0;
    let anchoImagen = 100 / carruselSection.length;  // calcular el ancho de cada imagen para que se vea cada una de las imagenes
    let posicion = 0;






    //Funcion para mover a la derecha
    botonDerecha.addEventListener("click", function () {

        // Detecta pantalla pequeña
        if (window.innerWidth <= 480) {
            //si estamos en la ultima imagen y volvemos a dar click hacia la derecha nos devolvera a la primera imagen
            if (posicion >= carruselSection.length - 1) {
                operacion = 0;
                posicion = 0;
                slider.style.transform = `translate(-${operacion}%)`;

                //la posicion se aumentera de 1 en 1, a la operacion se le suma el ancho de cada imagen para que se muestre una por una al dar click, mientras la posicion sea menor el total de las imagenes
            } else {
                posicion++;
                operacion = operacion + anchoImagen;
                slider.style.transform = `translate(-${operacion}%)`;
                slider.style.transition = "all ease .6s";
            }
        }
        // Detecta pantallas grandes
        else
            //si estamos en la ultima imagen y volvemos a dar click hacia la derecha nos devolvera a la primera imagen
            if (posicion >= carruselSection.length - 2) {
                operacion = 0;
                posicion = 0;
                slider.style.transform = `translate(-${operacion}%)`;

                //la posicion se aumentera de 1 en 1, a la operacion se le suma el ancho de cada imagen para que se muestre una por una al dar click, mientras la posicion sea menor al total de las imagenes
            } else {
                posicion++;
                operacion = operacion + anchoImagen;
                slider.style.transform = `translate(-${operacion}%)`;
                slider.style.transition = "all ease .6s";
            }

    });

    botonIzquierda.addEventListener("click", function () {
        // Pantallas pequeñas (480px o menos)
        if (window.innerWidth <= 480) {
            posicion--;
            //si estamos en la primera imagen y volvemos a dar click hacia la izquierda nos devolvera a la ultima imagen
            if (posicion < 0) {
                posicion = carruselSection.length - 1; //posicion tiene el valor de la ultima imagen 
                operacion = anchoImagen * (carruselSection.length - 1); //operacion calcula cual es el porcentaje al que equivale esa ultima imagen para despues desplazarlo hasta haya
                slider.style.transform = `translate(-${operacion}%)`;

                //calcula a que porcetaje se debe desplazar 
            } else {
                operacion = anchoImagen * posicion;
                slider.style.transform = `translate(-${operacion}%)`;
                slider.style.transition = "all ease .6s";
            }
        }
        // Pantallas más grandes
        else {
            posicion--;
            //si estamos en la primera imagen y damo click a la izquierda nos manda a la ultima imagen
            if (posicion < 0) {
                posicion = carruselSection.length - 2;
                operacion = anchoImagen * (carruselSection.length - 2);
                slider.style.transform = `translate(-${operacion}%)`;

                //calcula a que porcetaje se debe desplazar 
            } else {
                operacion = anchoImagen * posicion;
                slider.style.transform = `translate(-${operacion}%)`;
                slider.style.transition = "all ease .6s";
            }
        }
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


});
