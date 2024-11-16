document.addEventListener('DOMContentLoaded', function () {
    
    const miCuenta = document.getElementById("miCuenta");
    
    // Función para cerrar sesión y limpiar el localStorage
    miCuenta.addEventListener("click", function () {
        // Limpiar el localStorage
        localStorage.clear();
    });
});