document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('quote-popup');
    if (!modal) return;

    const openBtns = document.querySelectorAll('.js-open-quote, [href="#quote-popup"]');
    const closeElems = modal.querySelectorAll('.modal__close, .modal__backdrop');
    const form = modal.querySelector('.modal__form');

    const openModal = (e) => {
        e.preventDefault();
        modal.classList.add('modal--visible');
        document.body.style.overflow = 'hidden';
    };

    const closeModal = (e) => {
        if (e) e.preventDefault();
        modal.classList.remove('modal--visible');
        document.body.style.overflow = '';
    };

    openBtns.forEach(btn => btn.addEventListener('click', openModal));
    closeElems.forEach(elem => elem.addEventListener('click', closeModal));

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('modal--visible')) {
            closeModal();
        }
    });

    form?.addEventListener('submit', (e) => {
        e.preventDefault();
        form.reset();
        closeModal();
    });
});
