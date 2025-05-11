document.addEventListener('DOMContentLoaded', () => {
    function initHamburger() {
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');

        if (hamburger && navLinks) {
            hamburger.addEventListener('click', () => {
                hamburger.classList.toggle('active');
                navLinks.classList.toggle('active');
            });
        }
        // Highlight Active Link
        highlightActiveLink();
    }
    initHamburger();

    // Scroll to Contact Section
    const contactLink = document.querySelector('#contact-link');
    const footerSection = document.querySelector('.footer-section');

    if (contactLink && footerSection) {
        contactLink.addEventListener('click', (e) => {
            e.preventDefault();
            footerSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
                    // Close the mobile menu after clicking Contact
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        });
    }
});

function highlightActiveLink() {
    const currentPage = window.location.pathname.split("/")[1];
    const links = document.querySelectorAll(".nav-links a");
    links.forEach(link => {
        console.log(link.getAttribute("href").split('/')[1],currentPage)
        if (link.getAttribute("href").split('/')[1] === currentPage) {
            link.classList.add("active");
            console.log('it activated')
        }
    });
}
