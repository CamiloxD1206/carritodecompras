let carrito = document.querySelector('#imagen-carrito');
const modal = document.querySelector('#modal');
const cabeza = document.querySelector('#cabe');


carrito.addEventListener('click', () => {
    cabeza.classList.add('bloqueo')
    let parrafo = document.createElement('p');
    parrafo.classList.add('fondo-modal')
    parrafo.innerHTML = '<h3>SenaExpress :D</h3>';
    modal.appendChild(parrafo);
    console.log(modal)

})