function isElementInViewport(rect) {
    return (
      rect.top >= -1 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

const tableOfContents = document.getElementById("TableOfContents");
const allLinks = tableOfContents.querySelectorAll("ul li a");

const markdownBody = document.getElementById("MarkdownBody");
const allSections = markdownBody.querySelectorAll("h1, h2, h3, h4, h5");

const handler = (entries) => {
    let currentSection = null;

    for (const entry of entries) {
        if (entry.isIntersecting) {
            currentSection = entry.target;
            break;
        }
    }

    if (!currentSection) return;

    allLinks.forEach(link => link.classList.remove("active"));
    const activeLink = document.querySelector(`a[href="#${currentSection.id}"]`);
    if (activeLink) activeLink.classList.add("active");
};

const observer = new IntersectionObserver(handler, { root: null, rootMargin: "0px", threshold: 0 });

allSections.forEach(section => observer.observe(section));


