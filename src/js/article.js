// JavaScript for the article page
document.addEventListener('DOMContentLoaded', function() {
    // Sticky Table of Contents
    const toc = document.querySelector('.table-of-contents');
    const tocOffset = toc.offsetTop;

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > tocOffset) {
            toc.classList.add('sticky');
        } else {
            toc.classList.remove('sticky');
        }
    });

    // FAQ Accordion Functionality
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', function() {
            item.classList.toggle('active');
            const answer = item.querySelector('.faq-answer');
            if (item.classList.contains('active')) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
            } else {
                answer.style.maxHeight = 0;
            }
        });
    });

    // Hover Effects for Comparison Tables
    const comparisonRows = document.querySelectorAll('.comparison-row');
    comparisonRows.forEach(row => {
        row.addEventListener('mouseenter', function() {
            row.classList.add('hover');
        });
        row.addEventListener('mouseleave', function() {
            row.classList.remove('hover');
        });
    });
});