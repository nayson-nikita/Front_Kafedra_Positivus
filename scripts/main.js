document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.querySelector('.header__burger');
    const headerNav = document.querySelector('.header__nav');
    const headerLinks = document.querySelectorAll('.header__link, .header__btn');

    if (!burgerMenu) return;

    const closeMenu = () => {
        burgerMenu.classList.remove('active');
        headerNav.classList.remove('active');
        document.body.style.overflow = '';
    };

    burgerMenu.addEventListener('click', () => {
        burgerMenu.classList.toggle('active');
        headerNav.classList.toggle('active');

        const isMenuOpen = headerNav.classList.contains('active');
        document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    });

    headerLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });
});
