const iconoBoda = document.getElementById('IconoBoda');
const iconoElegante = document.getElementById('IconoElegante');
const iconoNina = document.getElementById('IconoNiña');
const carruselSection = document.querySelectorAll('.carruselSection');
const botones = document.getElementById('botones');




    // Función para ocultar todos los carruseles
    function OcultarCarruseles() {
        carruselSection.forEach(carruselSection => {
            carruselSection.classList.add('oculto');
            botones.classList.add('oculto');
        });
    }

    // Event listeners para los íconos
    iconoBoda.addEventListener('click', function () {
        hideAllCarousels(); // Ocultar todos los carruseles
        document.getElementById('carruselBoda').classList.remove('oculto'); // Mostrar carrusel de boda
    });

    iconoElegante.addEventListener('click', function () {
        hideAllCarousels(); // Ocultar todos los carruseles
        document.getElementById('carruselElegante').classList.remove('oculto'); // Mostrar carrusel elegante
    });

    iconoNina.addEventListener('click', function () {
        hideAllCarousels(); // Ocultar todos los carruseles
        document.getElementById('carruselNina').classList.remove('oculto'); // Mostrar carrusel niña
    });
