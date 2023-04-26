const elements = document.querySelectorAll('.fade-in');

elements.forEach(elements=> {
    elements.style.animationDelay='0.5s';
    elements.classList.add('animated');
});
