//Elemetos carrusel peinados boda
const iconoBoda = document.getElementById('IconoBoda');
const carrusel1Peinados1de1 = document.getElementById('carrusel1Peinados1de1');
const carrusel1Peinados2de1 = document.getElementById('carrusel1Peinados2de1');
const carrusel1Peinados1de2 = document.getElementById('carrusel1Peinados1de2');
const carrusel1Peinados2de2 = document.getElementById('carrusel1Peinados2de2');
//Elemetos carrusel peinados elegantes
const IconoElegante = document.getElementById('IconoElegante');
const carrusel2Peinados1de1 = document.getElementById('carrusel2Peinados1de1');
const carrusel2Peinados2de1 = document.getElementById('carrusel2Peinados2de1');
const carrusel2Peinados1de2 = document.getElementById('carrusel2Peinados1de2');
const carrusel2Peinados2de2 = document.getElementById('carrusel2Peinados2de2');

//Elemetos carrusel peinados niña
const IconoNiña = document.getElementById('IconoNiña');
const carrusel3Peinados1de1 = document.getElementById('carrusel3Peinados1de1');
const carrusel3Peinados2de1 = document.getElementById('carrusel3Peinados2de1');
const carrusel3Peinados1de2 = document.getElementById('carrusel3Peinados1de2');
const carrusel3Peinados2de2 = document.getElementById('carrusel3Peinados2de2');

//Elemetos carrusel peinados niña
const contenedorBotones = document.getElementById('contenedorBotones');

//Animacion al dar clic en iconos
iconoP1 = document.querySelector(".iconoP1");
iconoP2 = document.querySelector(".iconoP2");
iconoP3 = document.querySelector(".iconoP3");
const iconos = [iconoP1, iconoP2, iconoP3];




// Función para mostrar peinados boda
iconoBoda.addEventListener('click', function () {
    //boda
    carrusel1Peinados1de1.style.display = 'block';
    carrusel1Peinados2de1.style.display = 'block';
    carrusel1Peinados1de2.style.display = 'block';
    carrusel1Peinados2de2.style.display = 'block';
    //elegante
    carrusel2Peinados1de1.style.display = 'none';
    carrusel2Peinados2de1.style.display = 'none';
    carrusel2Peinados1de2.style.display = 'none';
    carrusel2Peinados2de2.style.display = 'none';
    //niña
    carrusel3Peinados1de1.style.display = 'none';
    carrusel3Peinados2de1.style.display = 'none';
    carrusel3Peinados1de2.style.display = 'none';
    carrusel3Peinados2de2.style.display = 'none';

    //animacion icono
    iconos.forEach(function (elemento) {
        elemento.style.border = 'none';
        elemento.style.boxShadow = 'none';
    });

    iconoP1.classList.add('rotar');
    iconoP1.style.border = '2px solid pink';
    iconoP1.style.borderRadius = '50%';
    iconoP1.style.boxShadow = '0 0 15px rgba(255, 0, 0, 0.5)';

    setTimeout(function () {
        iconoP1.classList.remove('rotar');
    }, 280);
});


// Función para mostrar peinados elegantes
IconoElegante.addEventListener('click', function () {
    //elegante
    carrusel2Peinados1de1.style.display = 'block';
    carrusel2Peinados2de1.style.display = 'block';
    carrusel2Peinados1de2.style.display = 'block';
    carrusel2Peinados2de2.style.display = 'block';
    //boda
    carrusel1Peinados1de1.style.display = 'none';
    carrusel1Peinados2de1.style.display = 'none';
    carrusel1Peinados1de2.style.display = 'none';
    carrusel1Peinados2de2.style.display = 'none';
    //niña
    carrusel3Peinados1de1.style.display = 'none';
    carrusel3Peinados2de1.style.display = 'none';
    carrusel3Peinados1de2.style.display = 'none';
    carrusel3Peinados2de2.style.display = 'none';
    //animacion icono
    iconos.forEach(function (elemento) {
        elemento.style.border = 'none'; // Elimina el borde
        elemento.style.boxShadow = 'none'; // Elimina la sombra, si deseas
    });

    iconoP2.classList.add('rotar');
    iconoP2.style.border = '2px solid pink';
    iconoP2.style.borderRadius = '50%';
    iconoP2.style.boxShadow = '0 0 15px rgba(255, 0, 0, 0.5)';


    setTimeout(function () {
        iconoP2.classList.remove('rotar');
    }, 280);
});

// Función para mostrar peinados niña
IconoNiña.addEventListener('click', function () {
    //niña
    carrusel3Peinados1de1.style.display = 'block';
    carrusel3Peinados2de1.style.display = 'block';
    carrusel3Peinados1de2.style.display = 'block';
    carrusel3Peinados2de2.style.display = 'block';
    //boda
    carrusel1Peinados1de1.style.display = 'none';
    carrusel1Peinados2de1.style.display = 'none';
    carrusel1Peinados1de2.style.display = 'none';
    carrusel1Peinados2de2.style.display = 'none';
    //elegante
    carrusel2Peinados1de1.style.display = 'none';
    carrusel2Peinados2de1.style.display = 'none';
    carrusel2Peinados1de2.style.display = 'none';
    carrusel2Peinados2de2.style.display = 'none';
    //animacion icono

    iconos.forEach(function (elemento) {
        elemento.style.border = 'none'; // Elimina el borde
        elemento.style.boxShadow = 'none'; // Elimina la sombra, si deseas
    });

    iconoP3.classList.add('rotar');
    iconoP3.style.border = '2px solid pink';
    iconoP3.style.borderRadius = '50%';
    iconoP3.style.boxShadow = '0 0 15px rgba(255, 0, 0, 0.5)';

    setTimeout(function () {
        iconoP3.classList.remove('rotar');
    }, 280);

});



