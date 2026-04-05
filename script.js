/* =====================================================================
   script.js — Logic for Mirkomil Oblokulov Portfolio
   ===================================================================== */

/* ---- Project Data --------------------------------------------------- */
const projectsData = {
  coldOutreach: {
    title: "Automated Cold Outreach Pipeline — Core Exterior",
    category: "Automation & AI",
    description: `A fully automated cold outreach pipeline built in n8n to streamline lead generation for Core Exterior, a commercial exterior maintenance company.

The workflow integrates the Google Maps API for lead discovery, automates contact detection and email personalization using GPT-4.1-mini, and routes outreach through Gmail or direct contact form submissions based on lead type.

All activity is logged to Google Sheets with built-in follow-up sequencing. Telegram alerts flag manual review items and warm replies for immediate attention.

Key Results:
• Reduced prospecting from hours of manual research to a hands-off, repeatable system
• Covers Southern Ontario's full commercial property market
• Full follow-up sequencing with zero manual input required
• Warm reply detection with instant Telegram notifications`,
    tech: ["n8n", "Google Maps API", "GPT-4.1-mini", "Gmail API", "Google Sheets", "Telegram Bot API"],
    image: "asset/img/cold-outreach-pipeline.jpg",
    link: "#",
    linkText: "View Project"
  },
  aiSuite: {
    title: "Integrated AI & Quantitative Automation Suite",
    category: "AI & Quantitative Automation",
    description: `A multi-system automation platform combining quantitative trading, agentic AI workflows, and technical infrastructure.

Quantitative Crypto Trading:
Engineered a trading algorithm using multivariate regression and triangular arbitrage to exploit price inefficiencies, generating $10,000+ in revenue. Computed risk-adjusted returns (Sharpe ratio) and maximum drawdown to evaluate strategy performance.

Agentic System Design:
Architected a multi-agent system using Claude and n8n to automate company communications, CRM development, and lead generation pipelines for both residential and commercial clients.

Technical Infrastructure:
• Managed secure REST API key integration across live market feeds
• Debugged complex JSON data structures for seamless agent synchronization
• Designed modular pipeline architecture for scalability`,
    tech: ["n8n", "Python", "Claude API", "SQL", "REST APIs", "JSON", "Multivariate Regression", "Triangular Arbitrage"],
    image: "",
    link: "#",
    linkText: "View Project"
  },
  arbitrage: {
    title: "Sports Arbitrage Detection Engine",
    category: "Quant Finance & Engineering",
    description: `A multi-variable algorithm applying the arbitrage condition (A = 1/Oⁿ < 1) to calculate Total Implied Probability across global sportsbooks, generating $10,000+ in risk-free profit through expected value maximization.

Probability & Risk Analysis:
Modelled probability distributions of match outcomes to quantify exposure and minimize probability of ruin. Implemented proportional staking formula (Stake = Total Investment × IP/TIP) to guarantee equal profit margins regardless of outcome.

Data Pipeline & API Integration:
Developed custom scripts interfacing with multiple REST APIs, ingesting and normalizing thousands of real-time data points into a standardized JSON format for downstream analysis.

Operational Risk Management:
Implemented "Stealth Rounding" to manage operational risk from account detection, maintaining long-run profitability of the strategy.`,
    tech: ["Python", "REST APIs", "JSON", "Probability Modelling", "Risk Analysis", "ETL Pipelines"],
    image: "",
    link: "#",
    linkText: "View System Logic"
  },
  ufa: {
    title: "UFA Tech Club",
    category: "Leadership & Community",
    description: `Founded and led a student organization at Ursula Franklin Academy to promote technology education.

I built the club's website using WordPress and managed a team of peers to organize workshops and events. We increased student engagement by 40% through targeted content campaigns and peer-to-peer mentorship.

Key Achievements:
• Built and maintained club website
• Organized 12+ tech workshops
• Grew membership from 15 to 60+ students
• Established partnerships with local tech companies`,
    tech: ["WordPress", "Leadership", "Event Planning", "Community Building"],
    image: "",
    link: "#",
    linkText: "View Initiative"
  },
  united: {
    title: "United F.C. Digital Campaign",
    category: "Digital Marketing",
    description: `Orchestrated a comprehensive digital marketing strategy for United F.C. that resulted in a 15% increase in seasonal sign-ups.

I utilized MailChimp for automated email flows and Canva for creating consistently branded social media assets, effectively modernizing the club's digital presence.

Key Results:
• 15% increase in seasonal registrations
• 200% growth in social media engagement
• Automated email nurturing sequences
• Consistent brand identity across channels`,
    tech: ["Canva", "MailChimp", "Social Media Strategy", "Data Analytics"],
    image: "",
    link: "#",
    linkText: "View Case Study"
  },
  econometrics: {
    title: "Premier League Midfielder Wages — Regression Analysis",
    category: "Econometrics & Data Science",
    description: `An end-to-end econometrics project examining what drives the weekly wages of Premier League midfielders.

Performance statistics were scraped from FBRef and combined with salary data from Capology, yielding a dataset of 261 professional players. Multiple regression models were built in STATA to test the hypothesis that creative playmaking is the primary performance driver for midfielder pay.

Key Findings:
• Assists are highly rewarded — a significant positive wage predictor
• Club status (Big 6) is the dominant wage driver, often outweighing individual stats
• Creative playmaking metrics validated as strong performance signals
• Data and financial power intersect more than pure on-pitch merit alone

Methodology:
• Web scraping: FBRef (performance stats) + Capology (salary data)
• OLS and multiple regression models in STATA
• Controlled for club prestige, position, and age`,
    tech: ["STATA", "OLS Regression", "Web Scraping", "Econometrics", "Data Cleaning", "Python"],
    image: "",
    link: "asset/img/midfielder-wages-econometrics.pdf",
    linkText: "View Full Report (PDF)"
  },
  financial: {
    title: "Portfolio Optimization & CAPM Analysis",
    category: "Finance & Quantitative Analysis",
    description: `A comprehensive financial analysis of three diverse risky assets, a broad-based market index, and risk-free T-bills using data from September 2022 to August 2025.

Working in a collaborative team, we utilized statistical software to process daily and weekly price series, calculating continuously compounded returns and constructing variance-covariance matrices to understand asset distributions.

Key Components:
• Optimal risky portfolio identification via Sharpe ratio maximization
• Capital Allocation Line (CAL) derivation and visualization
• CAPM evaluation: estimated asset betas and alphas
• Robustness testing of market proxies and risk-free rate assumptions`,
    tech: ["Financial Modeling", "Statistics", "CAPM", "Portfolio Theory", "Variance-Covariance Analysis", "Python / Excel"],
    image: "",
    link: "asset/img/financial-market-analysis.pdf",
    linkText: "View Full Report (PDF)"
  },
  portfolio: {
    title: "Personal Portfolio V2",
    category: "Web Development",
    description: `A blazing fast, accessible personal portfolio website. Built with semantic HTML5 and modern CSS3 (using CSS Variables for theming).

It features a custom Dark Mode design, glassmorphism UI elements, and is SEO optimized with JSON-LD structured data.

Technical Highlights:
• Vanilla CSS with custom properties for theming
• JSON-LD structured data for SEO
• Mobile-first responsive design
• Google Analytics integration`,
    tech: ["HTML5", "CSS3", "JavaScript", "SEO", "Responsive Design"],
    image: "",
    link: "https://github.com/oblokulov/mirkomil",
    linkText: "View Source Code"
  }
};

/* ---- Full-Page Modal Logic ------------------------------------------ */
const modal = document.getElementById('projectModal');
const closeModalBtn = document.getElementById('closeModal');

// Modal content elements
const mTitle = document.getElementById('modalTitle');
const mDesc = document.getElementById('modalDesc');
const mTag = document.getElementById('modalTag');
const mTech = document.getElementById('modalTech');
const mImg = document.getElementById('modalImg');
const mLink = document.getElementById('modalLink');
const mVisuals = document.querySelector('.modal-visuals');

function openProject(key) {
  const data = projectsData[key];
  if (!data) return;

  // Populate content
  mTitle.textContent = data.title;
  mDesc.innerHTML = data.description.replace(/\n/g, '<br>');
  mTag.textContent = data.category;

  // Tech Stack
  mTech.innerHTML = data.tech.map(t => `<span class="modal-tech-item">${t}</span>`).join('');

  // Image
  if (data.image) {
    mImg.src = data.image;
    mImg.alt = data.title;
    mImg.style.display = 'block';
    if (mVisuals) mVisuals.style.display = 'flex';
  } else {
    mImg.style.display = 'none';
    if (mVisuals) mVisuals.style.display = 'none';
  }

  // Action Link
  if (data.link && data.link !== "#") {
    mLink.href = data.link;
    mLink.textContent = data.linkText;
    mLink.style.display = 'inline-flex';
  } else {
    mLink.style.display = 'none';
  }

  // Show Modal with animation
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeProject() {
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

// Event Listeners
if (closeModalBtn) {
  closeModalBtn.addEventListener('click', closeProject);
}
if (modal) {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeProject();
  });
}
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal && modal.classList.contains('active')) closeProject();
});


/* ---- Mobile Navigation ---------------------------------------------- */
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
    navToggle.textContent = nav.classList.contains('open') ? '✕' : '☰';
  });
}

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    if (navToggle) navToggle.textContent = '☰';
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
