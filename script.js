let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150; 
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {                
                links.classList.remove('active');
            });
            document.querySelector('header nav a[href*=' + id + ' ]').classList.add('active');
        }
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.heading, .timeline-content, .profile-img, .home-content h4, .contact-container, .timeline-date', { origin: 'top' });
ScrollReveal().reveal('.timeline-content, .home-content , .timeline-items, .project-container', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .home-content a, .tools h2, .skills-container', { origin: 'right' });
ScrollReveal().reveal('.home-content p, .tools-container, .skills h2, .contact h2  ', { origin: 'left' });


const typed = new Typed('.multipe-text', {
    // strings: ['Mobile Developer', 'Quality Assurance, UI/UX'],

    strings: ['Quality Assurance'],
    typeSpeed: 105,
    backSpeed: 105,
    backDelay: 1075,
    loop: true
});
