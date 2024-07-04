let curr_slide = 0;
const slides = document.querySelectorAll('.carousel-item');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    if (index >= slides.length) {
        curr_slide = 0;
    } else if (index < 0) {
        curr_slide = slides.length - 1;
    } else {
        curr_slide = index;
    }

    const offset = -curr_slide * 100;
    document.querySelector('.carousel-slide').style.transform = `translateX(${offset}%)`;

    dots.forEach(dot => dot.classList.remove('active'));
    dots[curr_slide].classList.add('active');
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showSlide(index);
    });
});

setInterval(() => {
    showSlide(curr_slide + 1);
}, 5000);
