//Elemetos carrusel peinados boda
const iconoBoda = document.getElementById('IconoBoda');
const carrusel1Peinados1 = document.getElementById('carrusel1Peinados1');
const carrusel1Peinados2 = document.getElementById('carrusel1Peinados2');
//Elemetos carrusel peinados elegantes
const IconoElegante = document.getElementById('IconoElegante');
const carrusel2Peinados1 = document.getElementById('carrusel2Peinados1');
const carrusel2Peinados2 = document.getElementById('carrusel2Peinados2');

//Elemetos carrusel peinados niña
const IconoNiña = document.getElementById('IconoNiña');
const carrusel3Peinados1 = document.getElementById('carrusel3Peinados1');
const carrusel3Peinados2 = document.getElementById('carrusel3Peinados2');

//Elemetos carrusel peinados niña
const contenedorBotones = document.getElementById('contenedorBotones');

//Animacion al dar clic en iconos

iconoP1 = document.querySelector(".iconoP1"); 

// Función para mostrar peinados boda
iconoBoda.addEventListener('click', function() {
    carrusel1Peinados1.style.display = 'block';
    carrusel1Peinados2.style.display = 'block';
    carrusel2Peinados1.style.display = 'none';
    carrusel2Peinados2.style.display = 'none';
    carrusel3Peinados1.style.display = 'none';
    carrusel3Peinados2.style.display = 'none';

    //animacion icono
    iconoP1.classList.add('rotar');
    iconoP1.style.border = '2px solid pink';
    iconoP1.style.borderRadius = '50%';
    iconoP1.style.boxShadow = '0 0 15px rgba(255, 0, 0, 0.5)';

   setTimeout(function(){
        iconoP1.classList.remove('rotar');
    }, 280);
});

// Función para mostrar peinados elegantes
IconoElegante.addEventListener('click', function() {
    carrusel2Peinados1.style.display = 'block';
    carrusel2Peinados2.style.display = 'block';
    carrusel1Peinados1.style.display = 'none';
    carrusel1Peinados2.style.display = 'none';
    carrusel3Peinados1.style.display = 'none';
    carrusel3Peinados2.style.display = 'none';
    
});

// Función para mostrar peinados niña
IconoNiña.addEventListener('click', function() {
    carrusel3Peinados1.style.display = 'block';
    carrusel3Peinados2.style.display = 'block';
    carrusel2Peinados1.style.display = 'none';
    carrusel2Peinados2.style.display = 'none';
    carrusel1Peinados1.style.display = 'none';
    carrusel1Peinados2.style.display = 'none';
    
});



