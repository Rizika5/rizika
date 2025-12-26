const images = document.querySelectorAll('.gallery img');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    images.forEach((img, index) => {
        img.style.transform = translateY(${scrollY * 0.03 * (index+1)}px);
    });
});
