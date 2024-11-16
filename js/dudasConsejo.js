document.addEventListener('DOMContentLoaded', function () {

    const dudasConsejos = document.getElementById('dudasConsejos');
    const miCuenta = document.getElementById("miCuenta");


    // Verifica si la sesión está activa en localStorage y si es asi muestra el apartado para dejar tu pregunta
    if (localStorage.getItem('sesionActiva') === 'true') {
        dudasConsejos.style.visibility = 'visible';  // Muestra el elemento
    }


    // Al dar click en cerrar sesion oculta  el apartado para dejar tu pregunta
    miCuenta.addEventListener("click", function () {
        // Limpiar el localStorage 
        localStorage.removeItem('sesionActiva');
        // Ocultar el elemento dudasConsejos
        dudasConsejos.style.visibility = 'hidden';  // Ocultar el elemento

    });

});
