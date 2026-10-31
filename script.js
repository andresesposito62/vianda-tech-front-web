// Carrusel del hero: el bloque de texto y el portátil se desplazan a la izquierda
// para dar paso al siguiente servicio. Es un bucle continuo: la primera diapositiva
// se clona al final y, al llegar a ella, se salta de vuelta al inicio sin animación.
(() => {
  const INTERVAL = 6000;
  const hero = document.querySelector('.hero');
  const track = hero?.querySelector('.hero__track');
  const dotsBox = hero?.querySelector('.hero__dots');
  if (!track || !dotsBox) return;

  const slides = [...track.children];
  const total = slides.length;
  const clone = slides[0].cloneNode(true);
  clone.setAttribute('aria-hidden', 'true');
  track.append(clone);
  const all = [...track.children];

  const dots = slides.map((_, n) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'hero__dot';
    b.setAttribute('aria-label', `Ir a la diapositiva ${n + 1} de ${total}`);
    b.addEventListener('click', () => { go(n); restart(); });
    dotsBox.append(b);
    return b;
  });

  // Botón de pausa (WCAG 2.2.2): con "reducir movimiento" el carrusel arranca pausado.
  let paused = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const pauseBtn = document.createElement('button');
  pauseBtn.type = 'button';
  pauseBtn.className = 'hero__pause';
  pauseBtn.innerHTML = '<svg width="10" height="10" aria-hidden="true"><use href="#i-pause"/></svg>';
  dotsBox.append(pauseBtn);

  function renderPause() {
    pauseBtn.querySelector('use').setAttribute('href', paused ? '#i-play' : '#i-pause');
    pauseBtn.setAttribute('aria-label', paused ? 'Reanudar carrusel' : 'Pausar carrusel');
  }
  pauseBtn.addEventListener('click', () => {
    paused = !paused;
    renderPause();
    paused ? stop() : start();
  });

  let index = 0;
  let timer = null;

  function render() {
    const current = index % total;
    all.forEach((s, n) => { s.inert = n !== index; });
    dots.forEach((d, n) => d.setAttribute('aria-current', String(n === current)));
  }

  function go(n, animate = true) {
    track.style.transition = animate ? '' : 'none';
    index = n;
    track.style.transform = `translateX(${-100 * index}%)`;
    render();
  }

  // Al terminar el desplazamiento hacia el clon, vuelve a la primera sin animar.
  track.addEventListener('transitionend', (e) => {
    if (e.target !== track || index !== total) return;
    go(0, false);
    void track.offsetWidth;
  });

  // Salta sin animar a la diapositiva equivalente del otro extremo (la 1 y su clon se ven igual).
  function jump(n) {
    go(n, false);
    void track.offsetWidth;
  }

  function next() {
    if (index >= total) jump(0);
    go(index + 1);
  }

  function prev() {
    if (index === 0) jump(total);
    go(index - 1);
  }

  // Deslizamiento táctil: la pista sigue al dedo y, al soltar, avanza o vuelve a su sitio.
  const SWIPE_RATIO = 0.15;
  let startX = null;
  let startY = 0;
  let dx = 0;
  let dragging = false;
  let justDragged = false;

  track.addEventListener('pointerdown', (e) => {
    if (e.pointerType === 'mouse') return;
    startX = e.clientX;
    startY = e.clientY;
    dx = 0;
    dragging = false;
    stop();
  });

  track.addEventListener('pointermove', (e) => {
    if (startX === null) return;
    dx = e.clientX - startX;
    if (!dragging) {
      if (Math.abs(dx) < 10 || Math.abs(dx) < Math.abs(e.clientY - startY)) return;
      dragging = true;
      track.style.transition = 'none';
      track.setPointerCapture(e.pointerId);
    }
    track.style.transform = `translateX(calc(${-100 * index}% + ${dx}px))`;
  });

  function endSwipe() {
    if (startX === null) return;
    startX = null;
    if (dragging) {
      const limit = track.offsetWidth * SWIPE_RATIO;
      if (dx < -limit) next();
      else if (dx > limit) prev();
      else go(index);
      justDragged = true;
      setTimeout(() => { justDragged = false; }, 50);
      // Tras el primer swipe el usuario manda: se detiene el avance automático (WCAG 2.2.2).
      paused = true;
      renderPause();
    }
    dragging = false;
    start();
  }
  track.addEventListener('pointerup', endSwipe);
  track.addEventListener('pointercancel', endSwipe);

  // Un arrastre no debe contar como toque sobre un botón o enlace.
  track.addEventListener('click', (e) => {
    if (justDragged) { e.preventDefault(); e.stopPropagation(); }
  }, true);

  function start() {
    if (timer || paused) return;
    timer = setInterval(next, INTERVAL);
  }
  function stop() { clearInterval(timer); timer = null; }
  function restart() { stop(); start(); }

  hero.addEventListener('mouseenter', stop);
  hero.addEventListener('mouseleave', start);
  hero.addEventListener('focusin', stop);
  hero.addEventListener('focusout', start);
  document.addEventListener('visibilitychange', () => (document.hidden ? stop() : start()));

  render();
  renderPause();
  start();
})();
