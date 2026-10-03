document.addEventListener('DOMContentLoaded', () => {
    const processItems = document.querySelectorAll('.process__item');

    const PLUS_ICON = 'images/WorkingProcess/plus.svg';
    const MINUS_ICON = 'images/WorkingProcess/minus.svg';

    if (!processItems.length) return;

    processItems.forEach(item => {
        const toggleIcon = item.querySelector('.process__item-icon');

        item.addEventListener('click', () => {
            const isActive = item.classList.contains('process__item--active');

            processItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('process__item--active')) {
                    otherItem.classList.remove('process__item--active');
                    const otherIcon = otherItem.querySelector('.process__item-icon');
                    if (otherIcon) otherIcon.src = PLUS_ICON;
                }
            });

            item.classList.toggle('process__item--active', !isActive);
            if (toggleIcon) {
                toggleIcon.src = isActive ? PLUS_ICON : MINUS_ICON;
            }
        });
    });
});
