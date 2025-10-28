// ========================================
// FUNCIONES DE INTERACTIVIDAD - ISMAEL VALDIVIA
// Portafolio + CV Profesional
// Uso de 'this' para manipulación del DOM
// ========================================

/**
 * Resalta una tarjeta de servicio al pasar el mouse
 */
function resaltarTarjeta(elemento) {
  elemento.style.transform = 'translateY(-10px)';
  elemento.style.transition = 'transform 0.3s ease';
}

/**
 * Restaura el estado original de la tarjeta de servicio
 */
function restaurarTarjeta(elemento) {
  elemento.style.transform = 'translateY(0)';
}

/**
 * Abre un repositorio de GitHub al hacer clic en una tarjeta de portafolio
 */
function abrirRepositorio(elemento, url) {
  window.open(url, '_blank');
}

/**
 * Muestra el tema seleccionado en el select de contacto
 */
function mostrarTemaSeleccionado(select) {
  const mensajeTema = document.getElementById('mensaje-tema');
  if (select.value) {
    mensajeTema.textContent = `Has seleccionado: ${select.options[select.selectedIndex].text}`;
  } else {
    mensajeTema.textContent = '';
  }
}

/**
 * Elimina un elemento del DOM usando 'this'
 */
function eliminarElemento(elemento) {
  elemento.style.transition = 'opacity 0.5s ease';
  elemento.style.opacity = '0';
  setTimeout(() => elemento.remove(), 500);
}

/**
 * Modifica dinámicamente el contenido de un elemento
 */
function modificarContenido(elemento, nuevoContenido) {
  const contenidoOriginal = elemento.innerHTML;
  elemento.style.transition = 'all 0.3s ease';
  elemento.style.transform = 'scale(0.95)';
  setTimeout(() => {
    elemento.innerHTML = nuevoContenido;
    elemento.style.transform = 'scale(1)';
  }, 150);
}

// ========================================
// INICIALIZACIÓN AL CARGAR EL DOM
// ========================================
document.addEventListener('DOMContentLoaded', () => {
  const secciones = document.querySelectorAll('.seccion');
  const enlacesNav = document.querySelectorAll('.navbar-nav .nav-link');

  function actualizarNavbarActivo() {
    let seccionActual = '';
    secciones.forEach(seccion => {
      const topSeccion = seccion.offsetTop;
      const alturaSeccion = seccion.offsetHeight;
      const scrollActual = window.scrollY;
      if (scrollActual >= topSeccion - 100 && scrollActual < topSeccion + alturaSeccion - 100) {
        seccionActual = seccion.getAttribute('id');
      }
    });
    enlacesNav.forEach(enlace => {
      enlace.classList.remove('active');
      if (enlace.getAttribute('href') === `#${seccionActual}`) {
        enlace.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', actualizarNavbarActivo);
  actualizarNavbarActivo();

  // Animación de barras de progreso
  function animarBarrasProgreso() {
    const barras = document.querySelectorAll('.progreso');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const barra = entry.target;
          const anchoFinal = barra.style.width;
          barra.style.width = '0';
          setTimeout(() => barra.style.width = anchoFinal, 100);
          observer.unobserve(barra);
        }
      });
    }, { threshold: 0.5 });
    barras.forEach(barra => observer.observe(barra));
  }
  animarBarrasProgreso();

  // Formulario de contacto
  const formularioContacto = document.getElementById('formulario-contacto');
  if (formularioContacto) {
    formularioContacto.addEventListener('submit', (e) => {
      e.preventDefault();
      const nombre = document.getElementById('nombre-contacto').value;
      const email = document.getElementById('email-contacto').value;
      const tema = document.getElementById('tema-contacto').value;
      const mensaje = document.getElementById('mensaje-contacto').value;
      if (nombre && email && tema && mensaje) {
        alert(`✓ Mensaje enviado correctamente!\nNombre: ${nombre}\nEmail: ${email}\nTema: ${tema}\nGracias por contactarme. Te responderé pronto.`);
        formularioContacto.reset();
        document.getElementById('mensaje-tema').textContent = '';
      } else {
        alert('⚠ Por favor, completa todos los campos del formulario.');
      }
    });
  }

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(enlace => {
    enlace.addEventListener('click', function(e) {
      e.preventDefault();
      const idDestino = this.getAttribute('href');
      const elementoDestino = document.querySelector(idDestino);
      if (elementoDestino) {
        const offsetNavbar = 80;
        const posicionElemento = elementoDestino.offsetTop - offsetNavbar;
        window.scrollTo({ top: posicionElemento, behavior: 'smooth' });
      }
    });
  });

  // Efecto de aparición en títulos
  function efectoAparicionSecciones() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '0';
          entry.target.style.transform = 'translateY(20px)';
          setTimeout(() => {
            entry.target.style.transition = 'all 0.6s ease';
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }, 100);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.titulo-seccion').forEach(titulo => observer.observe(titulo));
  }
  efectoAparicionSecciones();

  // Mensaje en consola
  console.log('%c¡Hola! 👋', 'font-size: 24px; color: #667eea; font-weight: bold;');
  console.log('%cSoy Ismael Valdivia', 'font-size: 16px; color: #2c3e50;');
  console.log('%cGracias por visitar mi portafolio', 'font-size: 14px; color: #7f8c8d;');
  console.log('%c💻 Desarrollado con: HTML5, CSS3, JavaScript y Bootstrap', 'font-size: 12px; color: #95a5a6;');
  console.log('%c🔗 GitHub: https://github.com/ismaelvaldivia', 'font-size: 12px; color: #3498db;');
});