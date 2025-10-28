// Funciones de interactividad usando 'this'

/**
 * Resalta una tarjeta de servicio al pasar el mouse
 * @param {HTMLElement} elemento - La tarjeta que se resalta
 */
function resaltarTarjeta(elemento) {
  elemento.style.backgroundColor = '#e9ecef';
  elemento.style.borderLeft = '4px solid #0d6efd';
}

/**
 * Restaura el estado original de la tarjeta
 * @param {HTMLElement} elemento - La tarjeta a restaurar
 */
function restaurarTarjeta(elemento) {
  elemento.style.backgroundColor = '';
  elemento.style.borderLeft = '';
}

/**
 * Abre un repositorio de GitHub al hacer clic en una tarjeta de portafolio
 * @param {HTMLElement} elemento - La tarjeta clickeada
 * @param {string} url - URL del repositorio
 */
function abrirRepositorio(elemento, url) {
  // Efecto visual con 'this'
  elemento.style.transform = 'scale(0.98)';
  setTimeout(() => {
    elemento.style.transform = '';
    window.open(url, '_blank');
  }, 150);
}

/**
 * Muestra el tema seleccionado en el select de contacto
 * @param {HTMLSelectElement} select - El elemento select
 */
function mostrarTemaSeleccionado(select) {
  const mensaje = document.getElementById('mensaje-tema');
  const valor = select.value;
  if (valor) {
    mensaje.textContent = `Has seleccionado: ${valor.charAt(0).toUpperCase() + valor.slice(1)}`;
    mensaje.style.color = '#28a745';
  } else {
    mensaje.textContent = '';
  }
}

// Scroll suave y estado activo del navbar
document.addEventListener('DOMContentLoaded', () => {
  const secciones = document.querySelectorAll('.seccion');
  const enlacesNav = document.querySelectorAll('.navbar-nav .nav-link');

  window.addEventListener('scroll', () => {
    let actual = '';

    secciones.forEach(seccion => {
      const top = window.scrollY + 100;
      const offsetTop = seccion.offsetTop;
      const height = seccion.offsetHeight;
      const id = seccion.getAttribute('id');

      if (top >= offsetTop && top < offsetTop + height) {
        actual = id;
      }
    });

    enlacesNav.forEach(enlace => {
      enlace.classList.remove('active');
      if (enlace.getAttribute('href') === `#${actual}`) {
        enlace.classList.add('active');
      }
    });
  });
});