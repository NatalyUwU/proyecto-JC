document.addEventListener('DOMContentLoaded', function () {

    const formularioLogin = document.getElementById("formularioLogin");


    //funcion subir a localStorage al hacer click en el boton type submit
    formularioLogin.addEventListener("submit", function (event) {
        event.preventDefault();

        // Traera el valor que lleno el usuario para cada requisito
        const correoLogin = document.getElementById("correoLogin").value;
        const contraLogin = document.getElementById("contraLogin").value;


        // obtenemos los usuarios guardados en el localStorage
        const usuariosGuardados = localStorage.getItem("usuariosRegistrados");

        // Creamos un array vacío para los usuarios
        let usuarios = [];

        // Si encontramos algo en el localStorage, lo convertimos de nuevo en un array
        if (usuariosGuardados) {
            usuarios = JSON.parse(usuariosGuardados);
        }


        // Recorremos todos los usuarios guardados
        let usuarioEncontrado = null; // Variable para almacenar el usuario encontrado
        for (let i = 0; i < usuarios.length; i++) {
            if (usuarios[i].correo === correoLogin && usuarios[i].contra === contraLogin) {
                usuarioEncontrado = usuarios[i]; // Guardamos el usuario encontrado
                break; // Salimos del bucle porque ya encontramos el usuario
            }
        }
        
        // Si no encontramos al usuario después de recorrer todos los usuarios
        if (!usuarioEncontrado) {
            alert("¡Oops! 😅 Parece que el correo o la contraseña no coinciden. Intenta de nuevo");
        }
        // Si encontramos al usuario:
        if (usuarioEncontrado) {
            // colocaremos que la sesion esta activa
            localStorage.setItem("sesionActiva", "true");

            // Guardamos el nombre del usuario
            localStorage.setItem("nombreUsuario", usuarioEncontrado.nombre);

            // Redirigimos a la página principal
            window.location.href = "index.html";

        }
    });
});
