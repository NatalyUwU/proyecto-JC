//abrir y cerrar menu hamburguesa
const nav = document.querySelector ("#nav");
const abrir = document.querySelector ("#abrir");
const cerrar = document.querySelector ("#cerrar");

//menu servicios
const despliegueServicios = document.querySelector(".despliegueServicios");
const elementosServicios = document.querySelectorAll('#listaServicios li');

//menu productos
const despliegueProductos = document.querySelector(".despliegueProductos");
const elementosProductos = document.querySelectorAll('#listaProductos li');

//menu Autocuidado
const despliegueAutocuidado = document.querySelector(".despliegueAutocuidado");
const elementosAutocuidado = document.querySelectorAll('#listaAutocuidado li');

//menu Reseñas
const despliegueReseñas = document.querySelector(".despliegueReseñas");
const elementosReseñas = document.querySelectorAll('#listaReseñas li');




abrir.addEventListener("click", () => {
    nav.classList.add("visible");
});

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
});

//despliegue menu servicios
despliegueServicios.addEventListener('click', function() {
    elementosServicios.forEach(function(li) {
      if (li.style.display === 'none') {
        li.style.display = 'block'; 
      } else {
        li.style.display = 'none'; 
      }
    });
  });

//despliegue menu productos
  despliegueProductos.addEventListener('click', function() {
    elementosProductos.forEach(function(li) {
      if (li.style.display === 'none') {
        li.style.display = 'block'; 
      } else {
        li.style.display = 'none'; 
      }
    });
  });


  //despliegue menu Autocuidado
  despliegueAutocuidado.addEventListener('click', function() {
    elementosAutocuidado.forEach(function(li) {
      if (li.style.display === 'none') {
        li.style.display = 'block'; 
      } else {
        li.style.display = 'none'; 
      }
    });
  });

   //despliegue menu Reseñas
   despliegueReseñas.addEventListener('click', function() {
    elementosReseñas.forEach(function(li) {
      if (li.style.display === 'none') {
        li.style.display = 'block'; 
      } else {
        li.style.display = 'none'; 
      }
    });
  });