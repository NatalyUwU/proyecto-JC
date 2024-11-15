document.addEventListener('DOMContentLoaded', function () {
  
        const formSuscribirse = document.getElementById("formSuscribirse");
    
        //funcion subir a localStorage al hacer click en el boton type submit
        formSuscribirse.addEventListener("submit", function (event) {
            event.preventDefault();
    
            // Traera el valor que lleno el usuario para cada requisito
            const correoSuscribirse = document.getElementById("correoSuscribirse").value;
        
            // Los datos se guardaran en un objeto
            const correosSpan = {
                correoSuscribirse: correoSuscribirse,  
            };
    
            // El objeto se guardara el LocalStorage como tipo cadena
            localStorage.setItem("correosSpan", JSON.stringify(correosSpan));
    
        });
    });
    

//lauritatelle.03@gmail.com


