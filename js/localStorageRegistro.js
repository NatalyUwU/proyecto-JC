document.addEventListener('DOMContentLoaded', function () {
    const formRegistro = document.getElementById("formularioRegistro");

    //funcion subir a localStorage
    formRegistro.addEventListener("submit", function (event) {
        event.preventDefault();

        const nombre = document.getElementById("nombre").value;
        const apellidos = document.getElementById("apellidos").value;
        const correo = document.getElementById("correo").value;
        const contra = document.getElementById("contra").value;
        const genero = document.querySelector('input[name="genero"]:checked').value;

        // Los datos se guardan en un objeto
        const usuario = {
            nombre: nombre,
            apellidos: apellidos,
            correo: correo,
            contra: contra,
            genero: genero
        };

        // Se guarda el LocalStorage
        localStorage.setItem("usuarioRegistrado", JSON.stringify(usuario));

        // Redirigir al login
        window.location.href = "login.html";
    });
});
