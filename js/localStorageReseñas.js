document.addEventListener('DOMContentLoaded', function () {

    if (localStorage.getItem("sesionActiva") === "true") {
        const formularioReseña = document.getElementById("formularioReseña");

        // Codigo para enviar formulario
        formularioReseña.addEventListener("submit", function (event) {
            event.preventDefault();

            // Obtener la calificación de estrellas seleccionada
            const calificacion = document.querySelector('input[name="estrellas"]:checked');

            // Mensaje si el usuario no ha seleccionado una estrella
            if (!calificacion) {
                alert("¡Nos encantaría saber tu calificación! Por favor, selecciona una estrella para darnos tu opinión. 😊");
                return; // Detiene la ejecución si no se seleccionó ninguna estrella
            }

            // Trae los valores llenados por el usuario
            const nombre = document.getElementById("nombre").value;
            const servicio = document.getElementById("servicio").value;
            const comentario = document.getElementById("comentario").value;

            // Los datos se guardaran en un objeto
            const reseña = {
                nombre: nombre,
                servicio: servicio,
                comentario: comentario,
                calificacion: calificacion.value // Guardamos la calificación seleccionada
            };

            // El objeto se guardara en el LocalStorage como tipo cadena
            localStorage.setItem("reseña", JSON.stringify(reseña));

            // Mensaje de agradecimiento
            alert("¡Gracias por tu reseña! 🌟\n\nTu opinión significa mucho para nosotros. ¡Nos ayuda a mejorar y ofrecerte servicios de excelencia! 😊");

            //limpiar formulario una vez se haya enviado la reseña
            formularioReseña.reset();
        });

    } else {

        formularioReseña.addEventListener("click", function (event) {
            // Si la sesión no está activa no dejara enviar la reseña y se mostrara este mensaje al usuario
            alert("¡Hola! 😊 Para dejar tu reseña primero registrate e inicia sesión. ¡Es muy rápido!");
        });
    }
});