const typed = new Typed('.multiple-text', {
    strings: ['Web Developer', 'Frontend Developer', 'Software Developer'],
    typeSpeed: 55,
    backSpeed: 25,
    backDelay: 1000,
    loop: true
});  

// scroll reveal
ScrollReveal({ 
    reset: true, 
    distance:'80px',
    duration: 2000,
    dealy:200
});


ScrollReveal().reveal('.hello, .profession, .social-media, .intro, .btn-box, .heading', { origin: 'top' });

ScrollReveal().reveal('.contact-details,  .skill-list', { origin: 'bottom' });

ScrollReveal().reveal('.home-img, .project-img2', { origin: 'right' });

ScrollReveal().reveal('.project-img1, .project-img3', { origin: 'left' });
