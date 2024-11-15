document.addEventListener('DOMContentLoaded', function () {

  //elementos del menu
  const nav = document.getElementById("nav");
  const abrir = document.getElementById("abrir");
  const cerrar = document.getElementById("cerrar");

  //sub menu servicios
  const despliegueServicios = document.getElementById("despliegueServicios");
  const elementosServicios = document.querySelectorAll('#listaServicios li');


  //abrir y cerrar menu hamburguesa
  abrir.addEventListener("click", () => {
    nav.classList.add("visible");
  });

  cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
  });


  //despliegue submenu servicios
  //Apenas se despliebe el menu hamburguesa los submenus estaran ocultos
  elementosServicios.forEach(li => {
    li.style.display = 'none';
  });
  
  //cuando se haga clic en el a "Servicios", si los submenus estan ocultos pasaran a estar visibles, y se se hace click  en el a "Servicios" cuando los submenus estan visibles pasaran a estar ocultos.
  despliegueServicios.addEventListener('click', function () {
    elementosServicios.forEach(li => {
      if (li.style.display === 'none') {
        li.style.display = 'block';
      } else {
        li.style.display = 'none';
      }
    });
  });

});
