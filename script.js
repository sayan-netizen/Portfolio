// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');

if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
        const isActive = mobileNav.classList.contains('active');
        if (isActive) {
            mobileNav.classList.remove('active');
            hamburger.children[0].style.transform = 'rotate(0) translateY(0)';
            hamburger.children[1].style.transform = 'rotate(0) translateY(0)';
        } else {
            mobileNav.classList.add('active');
            hamburger.children[0].style.transform = 'rotate(45deg) translateY(6px)';
            hamburger.children[1].style.transform = 'rotate(-45deg) translateY(-6px)';
        }
    });

    // Close mobile nav when clicking a link
    const mobileLinks = mobileNav.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.remove('active');
            hamburger.children[0].style.transform = 'rotate(0) translateY(0)';
            hamburger.children[1].style.transform = 'rotate(0) translateY(0)';
        });
    });
}

// Scroll Reveal Animation (Intersection Observer)
const revealElements = document.querySelectorAll('.reveal');

const revealOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        
        entry.target.classList.add('active');
        // Optional: Stop observing once revealed
        observer.unobserve(entry.target);
    });
}, revealOptions);

revealElements.forEach(element => {
    revealObserver.observe(element);
});

// Immediately reveal the hero section if it's already in viewport
const heroSection = document.getElementById('hero');
if (heroSection) {
    heroSection.classList.add('active');
}

// Form Submission prevention (Fake submission UI)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = contactForm.querySelector('button');
        const originalText = btn.innerText;
        btn.innerText = 'MESSAGE SENT!';
        btn.style.backgroundColor = '#4caf50';
        btn.style.color = '#fff';
        contactForm.reset();
        
        setTimeout(() => {
            btn.innerText = originalText;
            btn.style.backgroundColor = '';
            btn.style.color = '';
        }, 3000);
    });
}
