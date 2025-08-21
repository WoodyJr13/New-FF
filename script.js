// Mobile nav toggle
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
if (hamburger && menu) {
  hamburger.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', String(open));
  });
}

// Smooth scroll for anchor links
Array.from(document.querySelectorAll('a[href^="#"]')).forEach((a) => {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href');
    if (!id || id === '#') return;
    const el = document.querySelector(id);
    if (!el) return;
    e.preventDefault();
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    menu?.classList.remove('open');
  });
});

// Fake subscribe handler (replace with Formspree / Google Form later)
const form = document.querySelector('#contact form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thanks! You\'re on the list.');
    form.reset();
  });
}
