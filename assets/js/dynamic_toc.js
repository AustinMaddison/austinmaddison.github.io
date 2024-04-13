const tableOfContents = document.getElementById("TableOfContents");
const tocAnchors = tableOfContents.querySelectorAll("ul li a");

const markdownBody = document.getElementById("MarkdownBody");
const headings = Array.from(markdownBody.querySelectorAll("h1, h2, h3, h4, h5"));

const obFunc = (entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const index = headings.indexOf(entry.target);
            tocAnchors.forEach((tab) => {
                tab.classList.remove("active");
            });
            tocAnchors[index].classList.add("active");
            tocAnchors[index].scrollIntoView({
                block: "nearest",
                inline: "nearest"
            });
        }
    });
};
const obOption = {
    rootMargin: "-50px 0px -77%",
    threshold: 1
};

const observer = new IntersectionObserver(obFunc, obOption);
headings.forEach((hTwo) => observer.observe(hTwo));