document.addEventListener('DOMContentLoaded', () => {
    const handleAnimationEnd = (e) => {
        e.target.classList.remove('slider-p-end', 'slider-span-end');
    };

    document.querySelectorAll('.slider-box').forEach(box => {
        const p = box.querySelector('p');
        const span = box.querySelector('span');

        p.addEventListener('animationend', handleAnimationEnd);
        span.addEventListener('animationend', handleAnimationEnd);

        box.addEventListener('mouseenter', () => {
            p.classList.remove('slider-p-end');
            span.classList.remove('slider-span-end');

            p.classList.add('slider-p');
            span.classList.add('slider-span');
        });

        box.addEventListener('mouseleave', () => {
            p.classList.remove('slider-p');
            span.classList.remove('slider-span');

            p.classList.add('slider-p-end');
            span.classList.add('slider-span-end');
        });
    });
});