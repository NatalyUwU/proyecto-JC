document.addEventListener('DOMContentLoaded', function () {
    const formularioReseña = document.getElementById("formularioReseña");

    
    if (localStorage.getItem("sesionActiva") === null) {
        localStorage.setItem("sesionActiva", "false");
    }

    if (localStorage.getItem("sesionActiva") === "false") {
        // Agregamos el eventListener para evitar que envíen la reseña si no están logueados
        formularioReseña.addEventListener("click", function (event) {
            // Si la sesión no está activa, mostramos el mensaje
            alert("¡Hola! 😊 Para dejar tu reseña primero registrate e inicia sesión. ¡Es muy rápido!");
            // Opcional: Evitar que el formulario se envíe si no está activo
            event.preventDefault();
        });
    }

    if (localStorage.getItem("sesionActiva") === "true") {

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


            // Obtener los usuarios registrados desde localStorage, o crear un array vacío si es el primer usuario
            let reseñas;

            const reseñasGuardadas = localStorage.getItem("reseñasGuardadas");

            if (reseñasGuardadas) {
                // Si hay reseñas guardadas, las convertimos en un array
                reseñas = JSON.parse(reseñasGuardadas);
            } else {
                // Si no hay reseñas guardadas, inicializamos un array vacío
                reseñas = [];
            }

            // Agregamos la nueva reseña al array
            reseñas.push(reseña);  // Aquí agregamos la nueva reseña, no reseñasGuardadas

            // Guardar el array de reseñas actualizado en el localStorage
            localStorage.setItem("reseñasGuardadas", JSON.stringify(reseñas));

            // Mensaje de agradecimiento
            alert("¡Gracias por tu reseña! 🌟\n\nTu opinión significa mucho para nosotros. ¡Nos ayuda a mejorar y ofrecerte servicios de excelencia! 😊");

            // Limpiar formulario una vez se haya enviado la reseña
            location.reload();
        });
    }

    
});
