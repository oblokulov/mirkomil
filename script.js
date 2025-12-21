/* =====================================================================
   script.js — Logic for Mirkomil Oblokulov Portfolio
   ===================================================================== */

/* ---- Project Accordion Toggle --------------------------------------- */
function toggleProject(projectKey) {
  const card = document.querySelector(`[data-project="${projectKey}"]`);
  if (!card) return;

  const details = card.querySelector('.project-details');
  const toggleBtn = card.querySelector('.project-toggle .toggle-text');

  const isExpanded = details.style.display === 'block';

  if (isExpanded) {
    // Collapse
    details.style.display = 'none';
    card.classList.remove('expanded');
    toggleBtn.textContent = 'View Details';
  } else {
    // Expand
    details.style.display = 'block';
    card.classList.add('expanded');
    toggleBtn.textContent = 'Show Less';
  }
}

/* ---- Mobile Navigation ---------------------------------------------- */
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');

navToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
  navToggle.textContent = nav.classList.contains('open') ? '✕' : '☰';
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    navToggle.textContent = '☰';
  });
});

/* ---- Year & Utilities ----------------------------------------------- */
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Intersection Observer for scroll animations
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
