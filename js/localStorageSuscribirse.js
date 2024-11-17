document.addEventListener('DOMContentLoaded', function () {

    const formSuscribirse = document.getElementById("formSuscribirse");

    // Función para subir a localStorage al hacer click en el botón type submit
    formSuscribirse.addEventListener("submit", function (event) {
        event.preventDefault();

        // Traerá el valor que llenó el usuario para cada requisito
        const correoSuscribirse = document.getElementById("correoSuscribirse").value;

        // Los datos se guardarán en un objeto
        const correoSpan = {
            correoSuscribirse: correoSuscribirse,
        };

        let correosSpans;

        const correosSpansGuardados = localStorage.getItem("correosSpansGuardados");
    
        if (correosSpansGuardados) {
            // Si hay correos guardados, los convertimos en un array
            correosSpans = JSON.parse(correosSpansGuardados);
        } else {
            // Si no hay correos guardados, inicializamos un array vacío
            correosSpans = [];
        }
    
        // Agregamos la nueva suscripción al array
        correosSpans.push(correoSpan);  // Aquí agregamos el nuevo correo

        // Guardar el array de correosSpans actualizado en el localStorage
        localStorage.setItem("correosSpansGuardados", JSON.stringify(correosSpans));

        // Limpiar formulario una vez se haya enviado la suscripción
        formSuscribirse.reset();

    });
});




