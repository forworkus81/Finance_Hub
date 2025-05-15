// JavaScript for the homepage functionality

// Dark/Light Mode Toggle
const toggleButton = document.getElementById('theme-toggle');
toggleButton?.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const currentTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', currentTheme); // Save theme preference
});

// Apply saved theme on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }
});

// Lazy-Loading Images
const lazyLoadImages = document.querySelectorAll('img[data-src]');
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });

    lazyLoadImages.forEach(img => {
        imageObserver.observe(img);
    });
} else {
    // Fallback for browsers without IntersectionObserver support
    lazyLoadImages.forEach(img => {
        img.src = img.dataset.src;
        img.classList.remove('lazy');
    });
}

// Newsletter Signup Form Handling
const newsletterForm = document.getElementById('newsletter-form');
newsletterForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    const emailInput = document.getElementById('email-input').value.trim();
    if (validateEmail(emailInput)) {
        alert('Thank you for signing up!');
        newsletterForm.reset();
    } else {
        alert('Please enter a valid email address.');
    }
});

// Email Validation Function
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(String(email).toLowerCase());
}

// Smooth Scroll for Internal Links
const internalLinks = document.querySelectorAll('a[href^="#"]');
internalLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});