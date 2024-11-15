document.addEventListener('DOMContentLoaded', function () {

    const formularioLogin = document.getElementById("formularioLogin");

    //funcion subir a localStorage al hacer click en el boton type submit
    formularioLogin.addEventListener("submit", function (event) {
        event.preventDefault();

        // Traera el valor que lleno el usuario para cada requisito
        const correoLogin = document.getElementById("correoLogin").value;
        const contraLogin = document.getElementById("contraLogin").value;

        const usuarioRegistrado = JSON.parse(localStorage.getItem("usuarioRegistrado")); //Se desencripta el localStorage y se almacenan los valores en la constante para que quede como objeto nuevamente

        //Compara si valor del input login es igual al valor del localStorage, ademas guarda el nombre que ingreso el usuario y redirige a la pestaña de index
        if (usuarioRegistrado.correo === correoLogin && usuarioRegistrado.contra === contraLogin) {
            localStorage.setItem("nombreUsuario", usuarioRegistrado.nombre);
            window.location.href = "index.html";
        } else {
            alert("Correo o contraseña incorrectos.");
        }
    });
});


