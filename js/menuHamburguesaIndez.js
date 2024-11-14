//abrir y cerrar menu hamburguesa
const nav = document.getElementById("nav");
const abrir = document.getElementById("abrir");
const cerrar = document.getElementById("cerrar");


//menu servicios
const despliegueServicios = document.getElementById("despliegueServicios");
const elementosServicios = document.querySelectorAll('#listaServicios li');



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


