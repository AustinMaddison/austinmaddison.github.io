
const observer_lozad = lozad('img, video', {
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
    threshold: 0.5, // Load elements when 50% in view
});

// Start observing elements
observer_lozad.observe();

// Pause videos when out of view
const lazyVideos = document.querySelectorAll('video.lozad');
const pauseObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.play();
                // console.log("play");

            } else {
                entry.target.pause();
                // console.log("pause");
            }
        });
    },
    { threshold: 0.5 }
);

// Observe all videos
lazyVideos.forEach((video) => pauseObserver.observe(video));