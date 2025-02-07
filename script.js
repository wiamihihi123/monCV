document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Merci pour votre message !');
    this.reset();
});

// Animation douce pour la navigation
const links = document.querySelectorAll('nav a');

links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 50,
            behavior: 'smooth'
        });
    });
});
