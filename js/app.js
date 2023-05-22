/* galeria */

const modalImagen = document.querySelector('#modal-img');

if (modalImagen) {
    modalImagen.addEventListener('show.bs.modal', function(e) {
        const enlace = e.relatedTarget;
        const rutaImagen = enlace.getAttribute('data-bs-imagen');
    
        /* construir la imagen */
        const imagen = document.createElement('IMG');
        imagen.src = `img/${rutaImagen}.jpg`; 
        imagen.classList.add('img-fluid');
        imagen.alt = 'Imagen Galeria';
    
        const contenidoModal = document.querySelector('.modal-body');
        contenidoModal.appendChild(imagen);
    });
    
    modalImagen.addEventListener('hidden.bs.modal', e => {
        const contenidoModal = document.querySelector('.modal-body');
        contenidoModal.textContent = '';
    });
};


/* formulario */

(function () {
    'use strict'
  
    let forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (e) {
          if (!form.checkValidity()) {
            e.preventDefault()
            e.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      });
  })();