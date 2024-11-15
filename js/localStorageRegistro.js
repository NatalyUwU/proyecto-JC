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

        // El objeto se guardara el LocalStorage como tipo cadena
        localStorage.setItem("usuarioRegistrado", JSON.stringify(usuario));

        // Se redirige al usuario a la pestaña de login
        window.location.href = "login.html";
    });
});
