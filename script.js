// ==================== Theme Toggle ====================
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.querySelector('.theme-icon');
const body = document.body;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
    body.classList.add('dark-theme');
    themeIcon.textContent = '☀️';
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    
    // Update icon and save preference
    if (body.classList.contains('dark-theme')) {
        themeIcon.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    } else {
        themeIcon.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    }
});

// ==================== Mobile Menu Toggle ====================
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const navMenu = document.getElementById('nav-menu');

mobileMenuToggle.addEventListener('click', () => {
    mobileMenuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a nav link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
        mobileMenuToggle.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// ==================== Navbar Scroll Effect ====================
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// ==================== Active Navigation Link ====================
const sections = document.querySelectorAll('section[id]');

function highlightNavigation() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLink?.classList.add('active');
        } else {
            navLink?.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', highlightNavigation);

// ==================== Smooth Scroll ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ==================== Contact Form Handling ====================
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Here you would typically send the data to a server
    // For now, we'll just show a success message
    alert(`Thank you for your message, ${data.name}! I'll get back to you soon.`);
    
    // Reset form
    contactForm.reset();
    
    // Note: To make the form fully functional, you would need to:
    // 1. Set up a backend endpoint (e.g., using FormSpree, EmailJS, or your own server)
    // 2. Send the form data to that endpoint
    // Example with fetch:
    /*
    fetch('YOUR_FORM_ENDPOINT', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        alert('Message sent successfully!');
        contactForm.reset();
    })
    .catch(error => {
        alert('Error sending message. Please try again.');
    });
    */
});

// ==================== Scroll Animations ====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, observerOptions);

// Observe all project cards and skill categories
document.querySelectorAll('.project-card, .skill-category, .stat-card').forEach(el => {
    observer.observe(el);
});

// ==================== Copy Email to Clipboard ====================
const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
emailLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const email = link.getAttribute('href').replace('mailto:', '');
        
        // Optional: Copy email to clipboard when clicked
        if (navigator.clipboard) {
            navigator.clipboard.writeText(email).then(() => {
                // Could show a tooltip or notification here
                console.log('Email copied to clipboard');
            });
        }
    });
});

// ==================== Dynamic Year in Footer ====================
const footerYear = document.querySelector('.footer p');
if (footerYear) {
    const currentYear = new Date().getFullYear();
    footerYear.textContent = footerYear.textContent.replace('2024', currentYear);
}

// ==================== Loading Animation ====================
window.addEventListener('load', () => {
    // Remove any loading screen if present
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.style.display = 'none';
    }
    
    // Add entrance animations
    document.querySelector('.hero')?.classList.add('fade-in-up');
});

// ==================== Keyboard Navigation ====================
// Improve accessibility with keyboard navigation
document.addEventListener('keydown', (e) => {
    // Escape key closes mobile menu
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        mobileMenuToggle.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// ==================== Performance Optimization ====================
// Lazy load images
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// ==================== Analytics & Tracking ====================
// Placeholder for analytics tracking
function trackEvent(category, action, label) {
    // If you're using Google Analytics, gtag, or other analytics:
    // gtag('event', action, {
    //     'event_category': category,
    //     'event_label': label
    // });
    console.log(`Event tracked: ${category} - ${action} - ${label}`);
}

// Track project clicks
document.querySelectorAll('.project-link').forEach(link => {
    link.addEventListener('click', (e) => {
        const projectTitle = link.closest('.project-card')?.querySelector('.project-title')?.textContent;
        trackEvent('Project', 'Click', projectTitle || 'Unknown');
    });
});

// Track resume download
document.querySelectorAll('a[download]').forEach(link => {
    link.addEventListener('click', () => {
        trackEvent('Resume', 'Download', 'PDF');
    });
});

// ==================== Utility Functions ====================
// Debounce function for performance
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

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Use throttled scroll handler for better performance
const throttledScrollHandler = throttle(() => {
    highlightNavigation();
}, 100);

window.addEventListener('scroll', throttledScrollHandler);

console.log('Portfolio loaded successfully! 🚀');
