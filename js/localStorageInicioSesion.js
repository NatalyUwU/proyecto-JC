document.addEventListener('DOMContentLoaded', function () {

    const formularioLogin = document.getElementById("formularioLogin");

    //funcion subir a localStorage
    formularioLogin.addEventListener("submit", function (event) {
        event.preventDefault();

    const correoLogin = document.getElementById("correoLogin").value;
    const contraLogin = document.getElementById("contraLogin").value;

    const usuarioRegistrado = JSON.parse(localStorage.getItem("usuarioRegistrado")); //Se desencripta el localStorage y se almacenan los valores en la constante

//Condicional, si valor del input login es igual al valor del localStorage ejecutara lo siguiente 
    if (usuarioRegistrado.correo === correoLogin && usuarioRegistrado.contra === contraLogin) {
        localStorage.setItem("nombreUsuario", usuarioRegistrado.nombre);
        window.location.href = "index.html";
    } else {
        alert("Correo o contraseña incorrectos."); 
    }
});
});


