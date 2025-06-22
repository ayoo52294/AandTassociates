window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');

    // Sticky Navbar
    header.classList.toggle('sticky', window.scrollY > 100);

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const scrollY = window.scrollY;


    });
});





