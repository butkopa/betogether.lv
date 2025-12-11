// Minimal interactive behaviors
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile menu toggle
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
if(toggle){
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    nav.style.display = expanded ? '' : 'flex';
  });
}

// Simple form handler (no server)
const form = document.getElementById('contact-form');
if(form){
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thanks! Form submission would be processed here.');
    form.reset();
  });
}
