//para que mi codigo se ejecute cuando mi html se haya cargado por completo en mi navegador
document.addEventListener('DOMContentLoaded', function () {
    const formRegistro = document.getElementById("formularioRegistro");

    //funcion subir a localStorage al hacer click en el boton type submit
    formRegistro.addEventListener("submit", function (event) {
        event.preventDefault();

        // Traera el valor que lleno el usuario para cada requisito
        const nombre = document.getElementById("nombre").value;
        const apellidos = document.getElementById("apellidos").value;
        const correo = document.getElementById("correo").value;
        const contra = document.getElementById("contra").value;
        const genero = document.querySelector('input[name="genero"]:checked').value;

        // Los datos se guardaran en un objeto
        const usuario = {
            nombre: nombre,
            apellidos: apellidos,
            correo: correo,
            contra: contra,
            genero: genero
        };

        // Obtener los usuarios registrados desde localStorage, o crear un array vacío si es el primer usuario
        let usuarios;
        //traera el valor de la clave usuariosGuardados
        const usuariosGuardados = localStorage.getItem("usuariosRegistrados");

        if (usuariosGuardados) {
            // Si hay usuarios guardados traemos el array
            usuarios = JSON.parse(usuariosGuardados);
        } else {
            // Si no hay usuarios guardados creamos un array vacío
            usuarios = [];
        }

        // Agregamos el nuevo usuario al array
        usuarios.push(usuario);

        // Guardar el array en el localStorage
        localStorage.setItem("usuariosRegistrados", JSON.stringify(usuarios));

        // Redirigir a la página de login
        window.location.href = "login.html";
    });
});
