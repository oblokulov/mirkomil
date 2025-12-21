// Mobile Menu Toggle
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');

navToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
  navToggle.textContent = nav.classList.contains('open') ? '✕' : '☰';
});

// Close menu when clicking a link
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    navToggle.textContent = '☰';
  });
});

// Dynamic Year
document.getElementById('year').textContent = new Date().getFullYear();

// Simple scroll reveal (Optional: adds a class when elements come into view)
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.section').forEach(section => {
  observer.observe(section);
});
