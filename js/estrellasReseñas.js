const labels = document.querySelectorAll('#estrellas label');

//Recorre los labels, cuando se le de click a cada label se activa la funcion cambiarEstrella que tiene como argumento indexSelec, que es la posicion unica que se le asigna a cada estrella
labels.forEach((labelSelec, indexSelec) => {
    labelSelec.addEventListener('click', function () {
        cambiarEstrella(indexSelec);
    });
});

//funcion para cambiar parte visual de la estrella seleccionada
function cambiarEstrella(indexSelec) {
    //Recorre los labels, y compara la posicion de cada uno de ellos en contra la posicion del label seleccionado anteriormente
    labels.forEach((label, i) => {
        //si los label son menores o iguales al label seleccionado se les colocara un color amarillo fuerte y se aumentara su tamaño
        if (i <= indexSelec) {
            label.style.color = '#ffd058';
            label.style.transform = 'scale(1.2)'; 

             //si los label son mayores al label seleccionado se les colocara un color amarillo suave y se disminuira el tamaño
        } else {
            label.style.color = '#fff0c6'; 
            label.style.transform = 'scale(1)'; 
        }
    });
}