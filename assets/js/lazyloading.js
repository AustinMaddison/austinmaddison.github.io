
const observer_lozad = lozad('video', {
    loaded: (el) => {
        if (el.tagName === 'IMG') {
            // Image has been lazy-loaded
        } else if (el.tagName === 'VIDEO') {

            // Lazy-load video source
            const source = el.querySelector('source');
            if (source && source.dataset.src) {
                source.src = source.dataset.src;
                el.load(); // Reload video
            }

            el.play(); // Auto-play video
        }
    },
    threshold: 0.3,
});

// Start observing elements
observer_lozad.observe();

// Pause videos when out of view
const lazyVideos = document.querySelectorAll('video');
const pauseObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.play();
                console.log("play");

            } else {
                entry.target.pause();
                console.log("pause");
            }
        });
    },
    { threshold: 0.3 }
);

// Observe all videos
lazyVideos.forEach((video) => pauseObserver.observe(video));