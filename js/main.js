// Main Application Entry Point

// App Initialization
document.addEventListener('DOMContentLoaded', () => {
    console.log('BioTechUSA Influencer Onboarding - Initializing...');

    // Render all sections
    renderAllSections();

    // Setup event listeners
    setupSmoothScroll();
    setupParallaxScroll();
    setupNavHighlight();

    console.log('App initialized successfully!');
});

// Smooth Scroll Navigation
function setupSmoothScroll() {
    const navLinks = document.querySelectorAll('.nav__link');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const navHeight = document.querySelector('.nav').offsetHeight;
                const targetPosition = targetSection.offsetTop - navHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Parallax Scroll Effect
function setupParallaxScroll() {
    const heroBackground = document.querySelector('.hero__background');

    if (!heroBackground) return;

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxSpeed = 0.5;

        // Only apply parallax in hero section
        if (scrolled < window.innerHeight) {
            heroBackground.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
        }
    });
}

// Navigation Highlight on Scroll
function setupNavHighlight() {
    const sections = document.querySelectorAll('.section, .hero');
    const navLinks = document.querySelectorAll('.nav__link');

    window.addEventListener('scroll', () => {
        let current = '';
        const navHeight = document.querySelector('.nav').offsetHeight;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - navHeight - 100;
            const sectionHeight = section.offsetHeight;

            if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Add active class style for nav links
const style = document.createElement('style');
style.textContent = `
    .nav__link.active {
        color: var(--color-accent);
    }
    
    .nav__link.active::after {
        width: 100%;
    }
`;
document.head.appendChild(style);
