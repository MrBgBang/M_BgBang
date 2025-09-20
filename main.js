// Activating Mobile Menu
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
        });
    }
};
showMenu('nav-toggle', 'nav-menu');

// Toggling Menu by clicking mobile menu links
const navLink = document.querySelectorAll('.nav-link');

function linkAction() {
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');

    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

// Changing Active Menu section while scrolling
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', scrollActive);

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active');
        } else {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active');
        }
    });
}

// Scroll Reveal Settings
const sr = ScrollReveal({
    origin: 'top',
    distance: '50px', // smaller movement for smoother feel
    duration: 1800,   // slightly slower
    reset: false      // don't repeat animations on scroll
});

// Home Section
sr.reveal('.home-title', {});
sr.reveal('.home-scroll', { delay: 300 });
sr.reveal('.home-img', { origin: 'right', delay: 500 });

// About Section
sr.reveal('.about-img', { delay: 600 });
sr.reveal('.about-subtitle', { delay: 400 });
sr.reveal('.about-profession', { delay: 500 });
sr.reveal('.about-text', { delay: 600 });
sr.reveal('.about-social-icon', { delay: 700, interval: 250 });

// Skills Section
sr.reveal('.skills-subtitle', {});
sr.reveal('.skills-name', { distance: '15px', delay: 100, interval: 150 });
sr.reveal('.skills-img', { delay: 500 });

// Portfolio Section
sr.reveal('.portfolio-img', { interval: 250 });

// Contact Section
sr.reveal('.contact-subtitle', {});
sr.reveal('.contact-text', { interval: 250 });
sr.reveal('.contact-input', { delay: 500 });
sr.reveal('.contact-button', { delay: 700 });
