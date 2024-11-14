document.addEventListener('DOMContentLoaded', function () {

    const nombreUsuario = localStorage.getItem("nombreUsuario");
    const miCuenta = document.getElementById("miCuenta");
    const mensajeBienvenida = document.getElementById("mensajeBienvenida");

    if (nombreUsuario) {
        document.getElementById("mensajeBienvenida").innerHTML = `¡Bienvenidx ${nombreUsuario}, <br> a nuestro espacio de bienestar!`;

        // Oculta los enlaces de Iniciar sesión y Registrarse
        const cuentaLinks = document.querySelectorAll('.cuenta a');
        cuentaLinks.forEach(link => {
            link.style.display = 'none';
        });
        // Muestra mensaje bienvenida y cerrar sesion
        miCuenta.style.display = 'block';
        mensajeBienvenida.style.display = 'block';

        // cerrar sesion
        miCuenta.addEventListener("click", function () {
            // Limpiar el localStorage para cerrar sesión
            localStorage.removeItem("nombreUsuario");

            // Volver a mostrar los enlaces de "Iniciar sesión" y "Registrarse"
            cuentaLinks.forEach(link => {
                link.style.display = 'inline';
            });
            //Oculta mensaje bienvenida y cerrar sesion
            miCuenta.style.display = 'none';
            mensajeBienvenida.style.display = 'none';
        });

    } else {
        // Si no hay usuario logueado, mostrar mensaje estándar
        document.getElementById("mensajeBienvenida").textContent = "¡Bienvenidx a nuestro espacio de bienestar!";
    }
});