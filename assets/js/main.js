(() => {
  const doc = document;

  // footer year
  const yearEl = doc.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // mobile nav
  const toggle = doc.querySelector('.nav-toggle');
  const nav = doc.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    });
    nav.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // portrait: silently upgrades the monogram when a photo file is dropped in
  doc.querySelectorAll('[data-portrait]').forEach((el) => {
    const img = new Image();
    img.addEventListener('load', () => {
      el.style.backgroundImage = `url("${img.src}")`;
      el.classList.add('has-photo');
    });
    img.src = el.getAttribute('data-portrait');
  });

  // scroll reveal
  const items = doc.querySelectorAll('.reveal');
  if (items.length && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
    items.forEach((el) => io.observe(el));
  } else {
    items.forEach((el) => el.classList.add('is-in'));
  }
})();
