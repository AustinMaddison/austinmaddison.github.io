const layers = document.querySelectorAll('.site-bg');

function parallax() {
    const y = window.scrollY;
    layers[0].style.transform = `translateY(${(0.8) * y}px)`;
}

let requestId;

function scrollHandler() {
    if (requestId) {
        cancelAnimationFrame(requestId);
    }
    requestId = requestAnimationFrame(parallax);
}

window.addEventListener('scroll', scrollHandler, false);
