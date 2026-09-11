/* =====================================================
   PORTWIPHADA — SCRIPT.JS
   ===================================================== */


/* =====================================================
   1. SMOOTH SCROLL
   ===================================================== */

document.querySelectorAll(".nav-menu a").forEach(function (link) {

    link.addEventListener("click", function (event) {

        event.preventDefault();

        const targetId = this.getAttribute("href");
        const target = document.querySelector(targetId);

        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }

    });

});


/* =====================================================
   2. ACTIVE PAGE NUMBER
   ===================================================== */

const pages = document.querySelectorAll(".portfolio-page");
const menuLinks = document.querySelectorAll(".nav-menu a");


const observer = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                const currentPage = entry.target.id;

                menuLinks.forEach(function (link) {

                    link.classList.remove("active");

                    if (link.getAttribute("href") === "#" + currentPage) {
                        link.classList.add("active");
                    }

                });

            }

        });

    },

    {
        threshold: 0.35
    }

);


pages.forEach(function (page) {
    observer.observe(page);
});


/* =====================================================
   3. SCROLL ANIMATION
   ===================================================== */

const animationObserver = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                animationObserver.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.15
    }

);


document
    .querySelectorAll(".page-title, .portfolio-frame")
    .forEach(function (element) {

        element.classList.add("animate");

        animationObserver.observe(element);

    });


/* =====================================================
   4. BACK TO TOP
   ===================================================== */

const backToTop = document.createElement("button");

backToTop.className = "back-to-top";

backToTop.innerHTML = "↑";

backToTop.setAttribute(
    "aria-label",
    "กลับไปด้านบน"
);

document.body.appendChild(backToTop);


window.addEventListener("scroll", function () {

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


backToTop.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =====================================================
   5. IMAGE CLICK / ZOOM
   ===================================================== */

const images = document.querySelectorAll(".portfolio-frame img");


const imageViewer = document.createElement("div");

imageViewer.className = "image-viewer";


imageViewer.innerHTML = `
    <button class="viewer-close" aria-label="ปิด">×</button>
    <img src="" alt="Portfolio">
`;


document.body.appendChild(imageViewer);


const viewerImage = imageViewer.querySelector("img");
const viewerClose = imageViewer.querySelector(".viewer-close");


images.forEach(function (image) {

    image.addEventListener("click", function () {

        viewerImage.src = this.src;
        viewerImage.alt = this.alt;

        imageViewer.classList.add("open");

        document.body.style.overflow = "hidden";

    });

});


function closeImageViewer() {

    imageViewer.classList.remove("open");

    document.body.style.overflow = "";

}


viewerClose.addEventListener(
    "click",
    closeImageViewer
);


imageViewer.addEventListener(
    "click",
    function (event) {

        if (event.target === imageViewer) {
            closeImageViewer();
        }

    }
);


document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {
            closeImageViewer();
        }

    }
);


/* =====================================================
   6. PAGE LOAD
   ===================================================== */

window.addEventListener("load", function () {

    document.body.classList.add("loaded");

});
