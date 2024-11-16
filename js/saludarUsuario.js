document.addEventListener('DOMContentLoaded', function () {

    const nombreUsuario = localStorage.getItem("nombreUsuario");
    const miCuenta = document.getElementById("miCuenta");
    const mensajeBienvenida = document.getElementById("mensajeBienvenida");
 

    //saludar si el usuario tiene nombre
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
     

        // funcion para cerrar sesion
        miCuenta.addEventListener("click", function () {

            // Volver a mostrar los enlaces de "Iniciar sesión" y "Registrarse"
            cuentaLinks.forEach(link => {
                link.style.display = 'inline';
            });
            //Oculta mensaje bienvenida y cerrar sesion
            miCuenta.style.display = 'none';
            mensajeBienvenida.style.display = 'none';
    
        });

        // Mensaje si el usuario no tiene nombre
    } else {
        document.getElementById("mensajeBienvenida").textContent = "¡Bienvenidx a nuestro espacio de bienestar!";
    }
});