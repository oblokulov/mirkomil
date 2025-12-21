/* =====================================================================
   script.js — Logic for Mirkomil Oblokulov Portfolio
   ===================================================================== */

/* ---- Project Data --------------------------------------------------- */
const projectsData = {
  arbitrage: {
    title: "Cross-Exchange Arbitrage Engine",
    category: "Quant Finance & Engineering",
    description: "A sophisticated risk-neutral modeling engine designed to identify and exploit price inefficiencies across global sports betting markets. The system calculates implied probabilities to detect 'sure-bet' opportunities (Σ 1/o < 1). It features a robust ETL pipeline to normalize heterogeneous data and a Stochastic Risk Management module to ensure consistent payouts regardless of event outcomes.",
    tech: ["Python", "Pandas/NumPy", "Rest APIs", "ETL Pipelines", "Risk Modeling", "Stochastic Calculus"],
    image: "", // Placeholder for now
    link: "#", // Add link if available
    linkText: "View System Logic"
  },
  ufa: {
    title: "UFA Tech Club",
    category: "Leadership & Community",
    description: "Founded and led a student organization at Ursula Franklin Academy to promote technology education. I built the club's website using WordPress and managed a team of peers to organize workshops and events. We increased student engagement by 40% through targeted content campaigns and peer-to-peer mentorship.",
    tech: ["WordPress", "Leadership", "Event Planning", "Community Building"],
    image: "",
    link: "#",
    linkText: "View Initiative"
  },
  united: {
    title: "United F.C. Digital Campaign",
    category: "Digital Marketing",
    description: "Orchestrated a comprehensive digital marketing strategy for United F.C. that resulted in a 15% increase in seasonal sign-ups. I utilized MailChimp for automated email flows and Canva for creating consistently branded social media assets, effectively modernizing the club's digital presence.",
    tech: ["Canva", "MailChimp", "Social Media Strategy", "Data Analytics"],
    image: "",
    link: "projects/united-fc-campaign.html",
    linkText: "View Case Study"
  },
  portfolio: {
    title: "Personal Portfolio V2",
    category: "Web Development",
    description: "A blazing fast, accessible personal portfolio website. Built with semantic HTML5 and modern CSS3 (using CSS Variables for theming). It features a custom Dark Mode design, glassmorphism UI elements, and is SEO optimized with JSON-LD structured data.",
    tech: ["HTML5", "CSS3", "JavaScript", "SEO", "Responsive Design"],
    image: "",
    link: "https://github.com/oblokulov/mirkomil",
    linkText: "View Source Code"
  }
};

/* ---- Modal Logic ---------------------------------------------------- */
const modal = document.getElementById('projectModal');
const closeModal = document.getElementById('closeModal');
const modalOverlay = document.querySelector('.modal-overlay');

// Elements to populate
const mTitle = document.getElementById('modalTitle');
const mDesc = document.getElementById('modalDesc');
const mTag = document.getElementById('modalTag');
const mTech = document.getElementById('modalTech');
const mImg = document.getElementById('modalImg');
const mLink = document.getElementById('modalLink');

function openProject(key) {
  const data = projectsData[key];
  if (!data) return;

  // Populate content
  mTitle.textContent = data.title;
  mDesc.textContent = data.description;
  mTag.textContent = data.category;

  // Tech Stack
  mTech.innerHTML = data.tech.map(t => `<span class="modal-tech-item">${t}</span>`).join('');

  // Image
  if (data.image) {
    mImg.src = data.image;
    mImg.alt = data.title;
  } else {
    mImg.src = ""; // Triggers CSS placeholder
  }

  // Action Link
  if (data.link && data.link !== "#") {
    mLink.href = data.link;
    mLink.textContent = data.linkText;
    mLink.style.display = 'inline-flex';
  } else {
    mLink.style.display = 'none';
  }

  // Show Modal
  modal.classList.add('active');
  document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeProject() {
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

// Event Listeners
closeModal.addEventListener('click', closeProject);
modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) closeProject();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('active')) closeProject();
});


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
