// ========================================
// FUNCIONES DE INTERACTIVIDAD - ISMAEL VALDIVIA
// Portafolio Profesional Moderno
// ========================================

document.addEventListener('DOMContentLoaded', () => {
  // Resaltar navegación activa
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
  console.log('%c¡Hola! 👋', 'font-size: 24px; color: #4f46e5; font-weight: bold;');
  console.log('%cSoy Ismael Valdivia', 'font-size: 16px; color: #1e293b;');
  console.log('%cGracias por visitar mi portafolio', 'font-size: 14px; color: #64748b;');
  console.log('%c💻 Desarrollado con: HTML5, CSS3, JavaScript y Bootstrap', 'font-size: 12px; color: #94a3b8;');
  console.log('%c🔗 GitHub: https://github.com/ismael-valdivia-D', 'font-size: 12px; color: #3b82f6;');
});