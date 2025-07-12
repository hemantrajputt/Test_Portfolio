// Portfolio data from the provided JSON
const portfolioData = {
  "projects": [
    {
      "title": "E-Commerce Platform",
      "description": "A full-stack e-commerce web application built with modern technologies, featuring user authentication, payment processing, and inventory management.",
      "technologies": ["React", "Node.js", "MongoDB", "Stripe API", "CSS3"],
      "category": "web",
      "image": "project1.jpg",
      "liveUrl": "#",
      "codeUrl": "#"
    },
    {
      "title": "Mobile Weather App",
      "description": "A cross-platform mobile application providing real-time weather forecasts with beautiful UI and location-based services.",
      "technologies": ["React Native", "JavaScript", "Weather API", "Redux"],
      "category": "mobile",
      "image": "project2.jpg",
      "liveUrl": "#",
      "codeUrl": "#"
    },
    {
      "title": "Brand Identity Design",
      "description": "Complete brand identity design including logo, typography, color palette, and marketing materials for a tech startup.",
      "technologies": ["Adobe Illustrator", "Photoshop", "Figma", "Brand Strategy"],
      "category": "design",
      "image": "project3.jpg",
      "liveUrl": "#",
      "codeUrl": "#"
    },
    {
      "title": "Portfolio Website",
      "description": "Responsive portfolio website with modern design, smooth animations, and optimized performance for showcasing creative work.",
      "technologies": ["HTML5", "CSS3", "JavaScript", "SASS", "Responsive Design"],
      "category": "web",
      "image": "project4.jpg",
      "liveUrl": "#",
      "codeUrl": "#"
    }
  ],
  "skills": {
    "frontend": [
      {"name": "HTML/CSS", "level": 95},
      {"name": "JavaScript", "level": 90},
      {"name": "React", "level": 85},
      {"name": "Vue.js", "level": 80}
    ],
    "backend": [
      {"name": "Node.js", "level": 85},
      {"name": "Python", "level": 80},
      {"name": "MongoDB", "level": 85},
      {"name": "PostgreSQL", "level": 75}
    ],
    "tools": [
      {"name": "Git/GitHub", "level": 90},
      {"name": "Figma", "level": 85},
      {"name": "Adobe Creative Suite", "level": 80},
      {"name": "VS Code", "level": 95}
    ]
  },
  "experience": [
    {
      "title": "Senior Frontend Developer",
      "company": "Tech Innovations Inc.",
      "period": "2022 - Present",
      "description": "Led frontend development for multiple high-traffic web applications, mentored junior developers, and implemented modern development practices."
    },
    {
      "title": "Full Stack Developer",
      "company": "Digital Solutions Co.",
      "period": "2020 - 2022", 
      "description": "Developed and maintained full-stack web applications using React, Node.js, and MongoDB. Collaborated with design and product teams to deliver user-focused solutions."
    },
    {
      "title": "Junior Web Developer",
      "company": "StartUp Studio",
      "period": "2018 - 2020",
      "description": "Built responsive websites and web applications, worked with clients to understand requirements, and gained experience in modern web development technologies."
    }
  ],
  "testimonials": [
    {
      "name": "Sarah Johnson",
      "position": "Product Manager at Tech Innovations",
      "content": "An exceptional developer who consistently delivers high-quality work on time. Their attention to detail and problem-solving skills are outstanding.",
      "avatar": "testimonial1.jpg"
    },
    {
      "name": "Mike Chen",
      "position": "CEO at Digital Solutions",
      "content": "Working with them was a pleasure. They brought creative solutions to complex problems and always exceeded our expectations.",
      "avatar": "testimonial2.jpg"
    }
  ]
};

// Global variables
let currentProjects = [...portfolioData.projects];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded, initializing app...');
  initNavigation();
  initTypingAnimation();
  initPortfolio();
  initSkills();
  initExperience();
  initTestimonials();
  initContactForm();
  initScrollAnimations();
  initCounters();
});

// Navigation functionality
function initNavigation() {
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Mobile menu toggle
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function(e) {
      e.preventDefault();
      navMenu.classList.toggle('active');
      navToggle.classList.toggle('active');
    });
  }

  // Navigation link functionality
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Close mobile menu
      if (navMenu) navMenu.classList.remove('active');
      if (navToggle) navToggle.classList.remove('active');
      
      // Get target section
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 70;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });

  // Update active navigation link on scroll
  window.addEventListener('scroll', updateActiveNavLink);
}

function updateActiveNavLink() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');
  const scrollPosition = window.scrollY + 100;

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

// Typing animation for hero section
function initTypingAnimation() {
  const typedText = document.getElementById('typed-text');
  if (!typedText) return;

  const phrases = [
    "Creating digital experiences that make a difference",
    "Building modern web applications",
    "Designing beautiful user interfaces",
    "Solving complex problems with code"
  ];
  
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function typeText() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
      typedText.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 50;
    } else {
      typedText.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 100;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
      isDeleting = true;
      typingSpeed = 2000;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typingSpeed = 500;
    }

    setTimeout(typeText, typingSpeed);
  }

  typeText();
}

// Portfolio functionality
function initPortfolio() {
  const portfolioGrid = document.getElementById('portfolio-grid');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const modal = document.getElementById('project-modal');
  const modalClose = document.getElementById('modal-close');
  
  if (!portfolioGrid) return;

  // Initial render
  renderProjects(currentProjects);
  
  // Filter functionality
  filterBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      
      const filterValue = this.getAttribute('data-filter');
      console.log('Filter clicked:', filterValue);
      
      // Update active filter button
      filterBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      
      // Filter projects
      if (filterValue === 'all') {
        currentProjects = [...portfolioData.projects];
      } else {
        currentProjects = portfolioData.projects.filter(project => 
          project.category === filterValue
        );
      }
      
      console.log('Filtered projects:', currentProjects);
      renderProjects(currentProjects);
    });
  });

  // Modal functionality
  if (modalClose) {
    modalClose.addEventListener('click', function(e) {
      e.preventDefault();
      closeModal();
    });
  }

  if (modal) {
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        closeModal();
      }
    });
  }

  // Close modal with Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal && modal.style.display === 'block') {
      closeModal();
    }
  });
}

function renderProjects(projects) {
  const portfolioGrid = document.getElementById('portfolio-grid');
  if (!portfolioGrid) return;

  portfolioGrid.innerHTML = '';
  
  projects.forEach((project, index) => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';
    projectCard.setAttribute('data-project-id', index);
    
    projectCard.innerHTML = `
      <div class="project-image">
        <span>${project.title}</span>
      </div>
      <div class="project-content">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.description}</p>
        <div class="project-tech">
          ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
        </div>
        <div class="project-links">
          <a href="${project.liveUrl}" class="project-link project-link--primary" target="_blank">Live Demo</a>
          <a href="${project.codeUrl}" class="project-link project-link--secondary" target="_blank">View Code</a>
        </div>
      </div>
    `;
    
    // Add click event to open modal
    projectCard.addEventListener('click', function(e) {
      // Don't open modal if clicking on links
      if (e.target.tagName === 'A') {
        return;
      }
      e.preventDefault();
      console.log('Project card clicked:', project.title);
      openModal(project);
    });
    
    portfolioGrid.appendChild(projectCard);
  });
}

function openModal(project) {
  const modal = document.getElementById('project-modal');
  const modalBody = document.getElementById('modal-body');
  
  if (!modal || !modalBody) return;

  modalBody.innerHTML = `
    <div class="project-image" style="height: 250px; margin-bottom: 2rem;">
      <span style="font-size: 1.5rem;">${project.title}</span>
    </div>
    <h2>${project.title}</h2>
    <p style="margin-bottom: 1.5rem; line-height: 1.8;">${project.description}</p>
    <div class="project-tech" style="margin-bottom: 2rem;">
      ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
    </div>
    <div class="project-links">
      <a href="${project.liveUrl}" class="project-link project-link--primary" target="_blank">Live Demo</a>
      <a href="${project.codeUrl}" class="project-link project-link--secondary" target="_blank">View Code</a>
    </div>
  `;
  
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('project-modal');
  if (modal) {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
}

// Skills section
function initSkills() {
  const skillCategories = ['frontend', 'backend', 'tools'];
  
  skillCategories.forEach(category => {
    const skillContainer = document.getElementById(`${category}-skills`);
    if (!skillContainer) return;
    
    const skills = portfolioData.skills[category];
    
    skills.forEach(skill => {
      const skillItem = document.createElement('div');
      skillItem.className = 'skill-item';
      skillItem.innerHTML = `
        <div class="skill-name">
          <span>${skill.name}</span>
          <span class="skill-level">${skill.level}%</span>
        </div>
        <div class="skill-bar">
          <div class="skill-progress" data-level="${skill.level}"></div>
        </div>
      `;
      skillContainer.appendChild(skillItem);
    });
  });
}

// Experience section
function initExperience() {
  const timeline = document.getElementById('timeline');
  if (!timeline) return;
  
  portfolioData.experience.forEach(exp => {
    const timelineItem = document.createElement('div');
    timelineItem.className = 'timeline-item';
    timelineItem.innerHTML = `
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <h3 class="timeline-title">${exp.title}</h3>
        <div class="timeline-company">${exp.company}</div>
        <div class="timeline-period">${exp.period}</div>
        <p class="timeline-description">${exp.description}</p>
      </div>
    `;
    timeline.appendChild(timelineItem);
  });
}

// Testimonials section
function initTestimonials() {
  const testimonialsGrid = document.getElementById('testimonials-grid');
  if (!testimonialsGrid) return;
  
  portfolioData.testimonials.forEach(testimonial => {
    const testimonialCard = document.createElement('div');
    testimonialCard.className = 'testimonial-card';
    testimonialCard.innerHTML = `
      <div class="testimonial-avatar">
        ${testimonial.name.charAt(0)}
      </div>
      <p class="testimonial-content">"${testimonial.content}"</p>
      <div class="testimonial-author">${testimonial.name}</div>
      <div class="testimonial-position">${testimonial.position}</div>
    `;
    testimonialsGrid.appendChild(testimonialCard);
  });
}

// Contact form
function initContactForm() {
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');
  
  if (!contactForm || !formStatus) return;

  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    console.log('Form submitted');
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message')
    };
    
    console.log('Form data:', data);
    
    // Validate form
    if (!data.name || !data.email || !data.subject || !data.message) {
      showFormStatus('Please fill in all fields.', 'error');
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      showFormStatus('Please enter a valid email address.', 'error');
      return;
    }
    
    // Show sending status
    showFormStatus('Sending message...', 'success');
    
    // Simulate form submission
    setTimeout(() => {
      showFormStatus('Message sent successfully! I\'ll get back to you soon.', 'success');
      contactForm.reset();
      
      // Hide status after 5 seconds
      setTimeout(() => {
        formStatus.style.display = 'none';
      }, 5000);
    }, 1500);
  });
}

function showFormStatus(message, type) {
  const formStatus = document.getElementById('form-status');
  if (!formStatus) return;
  
  formStatus.textContent = message;
  formStatus.className = `form-status ${type}`;
  formStatus.style.display = 'block';
  
  console.log('Form status:', message, type);
}

// Scroll animations
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        
        // Animate skill bars
        if (entry.target.classList.contains('skill-item')) {
          const skillProgress = entry.target.querySelector('.skill-progress');
          if (skillProgress) {
            const level = skillProgress.getAttribute('data-level');
            setTimeout(() => {
              skillProgress.style.width = level + '%';
            }, 300);
          }
        }
      }
    });
  }, observerOptions);

  // Observe elements for animation
  const elementsToAnimate = document.querySelectorAll('.project-card, .skill-item, .timeline-item, .testimonial-card, .contact-item');
  elementsToAnimate.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
}

// Counter animation
function initCounters() {
  const counters = document.querySelectorAll('.stat-number');
  
  const counterObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = parseInt(counter.getAttribute('data-count'));
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;
        
        const timer = setInterval(() => {
          current += step;
          counter.textContent = Math.floor(current);
          
          if (current >= target) {
            counter.textContent = target;
            clearInterval(timer);
          }
        }, 16);
        
        counterObserver.unobserve(counter);
      }
    });
  }, { threshold: 0.7 });

  counters.forEach(counter => {
    counterObserver.observe(counter);
  });
}

// Utility functions
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Smooth scrolling for hero buttons
document.addEventListener('click', function(e) {
  if (e.target.matches('a[href^="#"]')) {
    e.preventDefault();
    const target = document.querySelector(e.target.getAttribute('href'));
    if (target) {
      const offsetTop = target.offsetTop - 70;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  }
});

// Loading animation
window.addEventListener('load', function() {
  document.body.classList.add('loaded');
});

// Keyboard navigation support
document.addEventListener('keydown', function(e) {
  if (e.key === 'Tab') {
    document.body.classList.add('keyboard-navigation');
  }
});

document.addEventListener('mousedown', function() {
  document.body.classList.remove('keyboard-navigation');
});

// Add focus styles for keyboard navigation
const style = document.createElement('style');
style.textContent = `
  .keyboard-navigation *:focus {
    outline: 2px solid var(--portfolio-blue) !important;
    outline-offset: 2px;
  }
`;
document.head.appendChild(style);