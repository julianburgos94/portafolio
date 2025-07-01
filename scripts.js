// scripts.js

// Animación hover para las tarjetas de contacto
document.addEventListener('DOMContentLoaded', () => {
  const contactoCards = document.querySelectorAll('#contacto .contact-list > div');

  contactoCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'scale(1.05)';
      card.style.boxShadow = '0 8px 24px rgba(32,58,67,0.15), 0 0 24px #25d36633';
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'scale(1)';
      card.style.boxShadow = '0 4px 16px rgba(59,59,152,0.08)';
    });
  });
});

// Scroll suave para anclas
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
