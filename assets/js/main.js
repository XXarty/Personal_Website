document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear().toString();

  const navToggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.menu');
  if (navToggle && menu) {
    navToggle.addEventListener('click', () => {
      const isOpen = menu.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  // Enable dropdowns on mobile with click to expand
  const dropdownToggles = document.querySelectorAll('.has-dropdown > .dropdown-toggle');
  dropdownToggles.forEach((toggle) => {
    toggle.addEventListener('click', (e) => {
      const parent = e.currentTarget.parentElement;
      if (!parent) return;
      const isOpen = parent.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
  });
});


