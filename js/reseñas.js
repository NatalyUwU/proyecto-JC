document.addEventListener('DOMContentLoaded', function () {

const reseñas = document.getElementById('reseñas');

let presionar = false;
let posicionInicial = 0;

//funcion para realizar cuando el usuario presione el mouse
reseñas.addEventListener('mousedown', function(event) {
    event.preventDefault(); 
    presionar = true; 
    posicionInicial = event.clientX;  //devuelve la posición horizontal del ratón en px y la guarda como posicion inicial
    reseñas.style.cursor = 'grabbing';
});

//funcion para realizar cuando el usuario deje de presionar el mouse
window.addEventListener('mouseup', function() {
    presionar = false; 
    reseñas.style.cursor = 'grab'; 
});

//funcion para realizar cuando el usuario deslize el mouse
reseñas.addEventListener('mousemove', function(event) {
    if (presionar === false) { 
        return;
    }

    // Calcula el desplazamiento horizontal basado en la diferencia entre la posición inicial y la actual y se hace el desplazamiento mas notorio
    const desplazamiento = posicionInicial - event.clientX; //resultado negativo hacia la derecha, resultado positivo hacia la izquierda
    const notorio = 250; 

    
    reseñas.scrollLeft = reseñas.scrollLeft + desplazamiento * notorio;  //desplazamiento calcula cuanto debo de mover el contenido y scrollLeft lo mueve en base a lo que calculo desplazamiento
    

    posicionInicial = event.clientX;// Actualiza la posición del mouse
});
});
