document.addEventListener('DOMContentLoaded', function () {

    const botonIzquierda = document.querySelector(".botonIzquierda")
    const botonDerecha = document.querySelector(".botonDerecha")
    const slider = document.querySelector("#slider")
    const carruselSection = document.querySelectorAll(".carruselSection")



    let operacion = 0;
    let anchoImagen = 100 / carruselSection.length;
    let posicion = 0;

    //Funcion para mover a la derecha
    botonDerecha.addEventListener("click", function () {

        //si estamos en la ultima imagen y volvemos a dar click hacia la derecha nos devolvera a la primera image
        if (posicion >= carruselSection.length - 1) {
            operacion = 0;
            posicion = 0;
            slider.style.transform = `translate(-${operacion}%)`;
        }

        //la posicion se aumentera de 1 en 1, a la operacion se le suma el ancho de cada imagen para que se muestre una por una al dar click, mientras la posicion sea menor el total de las imagenes
        else {
            posicion++;
            operacion = operacion + anchoImagen;
            slider.style.transform = `translate(-${operacion}%)`;
            slider.style.transition = "all ease .6s";
        }
    });

    botonIzquierda.addEventListener("click", function () {
        posicion--;
        
        //si estamos en la primera imagen y volvemos a dar click hacia la izquierda nos devolvera a la ultima imagen
        if (posicion < 0) {
            posicion = carruselSection.length - 1;
            operacion = anchoImagen * (carruselSection.length - 1)
            slider.style.transform = `translate(-${operacion}%)`
        }
        
        //calcula a que porcetaje se debe desplazar 
        else {
            operacion = anchoImagen * posicion;
            slider.style.transform = `translate(-${operacion}%)`
            slider.style.transition = "all ease .6s"
        }
    });

});
