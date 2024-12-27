document.addEventListener("DOMContentLoaded", function() {
const iframes = document.querySelectorAll('iframe[src*="youtube.com/embed"]');

const updateIframeHeights = () => {
    iframes.forEach(iframe => {
    const width = iframe.offsetWidth;
    const height = (width * 9) / 16;
    iframe.style.height = `${height}px`;
    });
};

// Initial resize
updateIframeHeights();

// Adjust heights on window resize
window.addEventListener('resize', updateIframeHeights);
});
