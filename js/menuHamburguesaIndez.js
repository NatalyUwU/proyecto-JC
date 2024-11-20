document.addEventListener('DOMContentLoaded', function () {

  //elementos del menu
  const listaMenus = document.getElementById("listaMenus");
  const abrir = document.getElementById("abrir");
  const cerrar = document.getElementById("cerrar");

  //sub menu servicios
  const despliegueServicios = document.getElementById("despliegueServicios");
  const elementosServicios = document.querySelectorAll('#listasubmenu li');



  //abrir y cerrar menu hamburguesa
  abrir.addEventListener("click", () => {
    listaMenus.style.display = 'block';
    abrir.style.display = 'none';
  });

  cerrar.addEventListener("click", () => {
    listaMenus.style.display = 'none';
    abrir.style.display = 'flex';
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
