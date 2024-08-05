document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.header__hamburger');
    const mobileMenu = document.querySelector('.header__mobile-menu');

    function closeMenu() {
        hamburger.classList.remove('header__hamburger--active');
        mobileMenu.classList.remove('header__mobile-menu--active');
    }

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('header__hamburger--active');
        mobileMenu.classList.toggle('header__mobile-menu--active');
    });

    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            closeMenu();
        }
    });
});