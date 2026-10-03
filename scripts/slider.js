document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.testimonials__slider');
    const dots = document.querySelectorAll('.testimonials__dot');
    const prevBtn = document.querySelector('.testimonials__arrow--prev');
    const nextBtn = document.querySelector('.testimonials__arrow--next');

    const originalCards = document.querySelectorAll('.testimonials__card, .testimonial-card');

    if (!slider || !originalCards.length) return;

    let currentIndex = 0;
    const totalCards = originalCards.length;
    const gap = 40;
    let isMoving = false;

    const firstClone = originalCards[0].cloneNode(true);
    const lastClone = originalCards[totalCards - 1].cloneNode(true);

    slider.appendChild(firstClone);
    slider.insertBefore(lastClone, slider.firstChild);

    function getOffset(index) {
        const cardWidth = originalCards[0].offsetWidth;
        return -(index + 1) * (cardWidth + gap);
    }

    slider.style.transform = `translateX(${getOffset(currentIndex)}px)`;

    function moveSlider(animate = true) {
        slider.style.transition = animate ? 'transform 0.4s ease-in-out' : 'none';
        slider.style.transform = `translateX(${getOffset(currentIndex)}px)`;

        if (currentIndex >= 0 && currentIndex < totalCards) {
            dots.forEach((dot, idx) => {
                dot.classList.toggle('testimonials__dot--active', idx === currentIndex);
            });
        }
    }

    nextBtn?.addEventListener('click', () => {
        if (isMoving) return;
        isMoving = true;
        currentIndex++;
        moveSlider();
    });

    prevBtn?.addEventListener('click', () => {
        if (isMoving) return;
        isMoving = true;
        currentIndex--;
        moveSlider();
    });

    slider.addEventListener('transitionend', () => {
        isMoving = false;

        if (currentIndex >= totalCards) {
            currentIndex = 0;
            moveSlider(false);
        }

        if (currentIndex < 0) {
            currentIndex = totalCards - 1;
            moveSlider(false);
        }
    });

    dots.forEach((dot, idx) => {
        dot.addEventListener('click', () => {
            if (isMoving || currentIndex === idx) return;
            currentIndex = idx;
            moveSlider();
        });
    });

    window.addEventListener('resize', () => {
        moveSlider(false);
    });
});
