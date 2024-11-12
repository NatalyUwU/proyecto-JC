document.addEventListener('DOMContentLoaded', function () {

const reseñas = document.getElementById('reseñas');

let presionar = false;
let horizontalPosicion = 0;

reseñas.addEventListener('mousedown', function(event) {
    presionar = true; 
    horizontalPosicion = event.clientX; 
    reseñas.style.cursor = 'grabbing';
    event.preventDefault(); 
});


window.addEventListener('mouseup', function() {
    presionar = false; 
    reseñas.style.cursor = 'grab'; 
});

reseñas.addEventListener('mousemove', function(event) {
    if (presionar === false) { 
        return;
    }

    // Calcula el desplazamiento horizontal basado en la diferencia entre la posición inicial y la actual
    const desplazamiento = horizontalPosicion - event.clientX;

    // Multiplica el desplazamiento para hacerlo más notorio (ajusta el factor según sea necesario)
    const factor = 250; // Puedes ajustar este valor para que el desplazamiento sea más grande
    reseñas.scrollLeft += desplazamiento * factor;

    // Actualiza la posición del ratón para continuar el arrastre
    horizontalPosicion = event.clientX;
});
});
