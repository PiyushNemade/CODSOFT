//hamburger menu
const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('navbar');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navbar.classList.toggle('active');
});


const reviewContainer = document.querySelector('.review-container');
const reviews = document.querySelectorAll('.review');
let currentIndex = 0;

document.querySelector('.next').addEventListener('click', () => {
  if (currentIndex < reviews.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0; 
  }
  updateSlider();
});

document.querySelector('.prev').addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = reviews.length - 1;
  }
  updateSlider();
});

function updateSlider() {
  const offset = -currentIndex * 100;
  reviewContainer.style.transform = `translateX(${offset}%)`;
}


// scroll reveal
ScrollReveal({ 
  reset: true, 
  distance:'80px',
  duration: 2000,
  dealy:200
});

ScrollReveal().reveal('.hero-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.card1', { origin: 'left' });
ScrollReveal().reveal('.card2, .package-cards, .contact-details', { origin: 'bottom' });
ScrollReveal().reveal('.card3, .review-slider', { origin: 'right' });

