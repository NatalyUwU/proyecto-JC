const labels = document.querySelectorAll('#estrellas label');

labels.forEach((labelSelect, indexSelect) => {
    labelSelect.addEventListener('click', function() {
        cambiarEstrella(indexSelect); 
    });
});

function cambiarEstrella(indexSelect) {
    labels.forEach((label, i) => {
        if (i <= indexSelect) {
            label.style.color = '#ffd058'; // Color de estrella seleccionada y anteriores
            label.style.transform = 'scale(1.2)'; // Aumentar el tamaño de la estrella seleccionada
        } else {
            label.style.color = '#fff0c6'; // Restablecer el color para las estrellas no seleccionadas
            label.style.transform = 'scale(1)'; // Restablecer el tamaño
        }
    });
}