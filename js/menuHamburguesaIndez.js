//abrir y cerrar menu hamburguesa
const nav = document.getElementById("nav");
const abrir = document.getElementById("abrir");
const cerrar = document.getElementById("cerrar");


//menu servicios
const despliegueServicios = document.getElementById("despliegueServicios");
const elementosServicios = document.querySelectorAll('#listaServicios li');

//menu productos
const despliegueProductos = document.getElementById("despliegueProductos");
const elementosProductos = document.querySelectorAll('#listaProductos li');

//menu Autocuidado
const despliegueAutocuidado = document.getElementById("despliegueAutocuidado");
const elementosAutocuidado = document.querySelectorAll('#listaAutocuidado li');

//menu Reseñas
const despliegueReseñas = document.getElementById("despliegueReseñas");
const elementosReseñas = document.querySelectorAll('#listaReseñas li');




abrir.addEventListener("click", () => {
  nav.classList.add("visible");
});

cerrar.addEventListener("click", () => {
  nav.classList.remove("visible");
});

//despliegue menu servicios

elementosServicios.forEach(function (li) {
  li.style.display = 'none';
});

despliegueServicios.addEventListener('click', function () {
  elementosServicios.forEach(function (li) {
    if (li.style.display === 'none') {
      li.style.display = 'block';
    } else {
      li.style.display = 'none';
    }
  });
});

//despliegue menu productos

elementosProductos.forEach(function (li) {
  li.style.display = 'none';
});


despliegueProductos.addEventListener('click', function () {
  elementosProductos.forEach(function (li) {

    if (li.style.display === 'none') {
      li.style.display = 'block';
    } else {
      li.style.display = 'none';
    }
  });
});


//despliegue menu Autocuidado
elementosAutocuidado.forEach(function (li) {
  li.style.display = 'none';
});

despliegueAutocuidado.addEventListener('click', function () {
  elementosAutocuidado.forEach(function (li) {

    if (li.style.display === 'none') {
      li.style.display = 'block';
    } else {
      li.style.display = 'none';
    }
  });
});

//despliegue menu Reseñas
elementosReseñas.forEach(function (li) {
  li.style.display = 'none';
});

despliegueReseñas.addEventListener('click', function () {
  elementosReseñas.forEach(function (li) {
    if (li.style.display === 'none') {
      li.style.display = 'block';
    } else {
      li.style.display = 'none';
    }
  });
});