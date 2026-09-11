/* =====================================================
   PORTWIPHADA — SCRIPT.JS
   ===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       1. ELEMENTS
       ===================================================== */

    const pages = document.querySelectorAll(".portfolio-page");
    const menuLinks = document.querySelectorAll(".nav-menu a");


    /* =====================================================
       2. SMOOTH SCROLL — เมนูด้านบน
       ===================================================== */

    menuLinks.forEach(function (link) {

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
       3. ACTIVE MENU — ไฮไลต์หน้าปัจจุบัน
       ===================================================== */

    const pageObserver = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    const currentPage = entry.target.id;

                    menuLinks.forEach(function (link) {

                        link.classList.remove("active");

                        if (
                            link.getAttribute("href") ===
                            "#" + currentPage
                        ) {
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
        pageObserver.observe(page);
    });


    /* =====================================================
       4. SCROLL ANIMATION
       ===================================================== */

    const animationObserver = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    animationObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.15
        }
    );


    document
        .querySelectorAll(
            ".page-title, .portfolio-frame"
        )
        .forEach(function (element) {

            element.classList.add("animate");

            animationObserver.observe(element);

        });


    /* =====================================================
       5. BACK TO TOP — ปุ่มกลับด้านบน
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
       6. IMAGE VIEWER — กดรูปเพื่อขยาย
       ===================================================== */

    const images =
        document.querySelectorAll(
            ".portfolio-frame img"
        );


    const imageViewer =
        document.createElement("div");

    imageViewer.className = "image-viewer";


    imageViewer.innerHTML = `
        <button
            class="viewer-close"
            aria-label="ปิด"
            type="button"
        >
            ×
        </button>

        <img
            src=""
            alt="Portfolio"
        >
    `;


    document.body.appendChild(imageViewer);


    const viewerImage =
        imageViewer.querySelector("img");

    const viewerClose =
        imageViewer.querySelector(
            ".viewer-close"
        );


    images.forEach(function (image) {

        image.addEventListener("click", function () {

            viewerImage.src = this.src;
            viewerImage.alt = this.alt;

            imageViewer.classList.add("open");

            document.body.style.overflow =
                "hidden";

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

            if (
                event.target === imageViewer
            ) {
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
       7. BEFORE / NEXT PAGE
       ===================================================== */

    /*
       ป้องกันการสร้างปุ่มซ้ำ
       หากมี navigation อยู่แล้ว จะไม่สร้างเพิ่ม
    */

    pages.forEach(function (page, index) {

        /* ถ้ามีปุ่มอยู่แล้ว ไม่สร้างซ้ำ */
        if (
            page.querySelector(
                ".portfolio-navigation"
            )
        ) {
            return;
        }


        const navigation =
            document.createElement("div");

        navigation.className =
            "portfolio-navigation";


        navigation.innerHTML = `
            <button
                class="portfolio-nav-btn prev-page"
                type="button"
            >
                <span>←</span>
                ก่อนหน้า
            </button>

            <div class="portfolio-counter">
                <strong>
                    ${String(index + 1).padStart(2, "0")}
                </strong>

                <span>/</span>

                <span>
                    ${String(pages.length).padStart(2, "0")}
                </span>
            </div>

            <button
                class="portfolio-nav-btn next-page"
                type="button"
            >
                ถัดไป
                <span>→</span>
            </button>
        `;


        page.appendChild(navigation);


        /* ---------- ปุ่มก่อนหน้า ---------- */

        const prevButton =
            navigation.querySelector(
                ".prev-page"
            );


        if (index === 0) {

            prevButton.disabled = true;

        } else {

            prevButton.addEventListener(
                "click",
                function () {

                    pages[index - 1].scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }
            );

        }


        /* ---------- ปุ่มถัดไป ---------- */

        const nextButton =
            navigation.querySelector(
                ".next-page"
            );


        if (
            index === pages.length - 1
        ) {

            nextButton.disabled = true;

        } else {

            nextButton.addEventListener(
                "click",
                function () {

                    pages[index + 1].scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }
            );

        }

    });


    /* =====================================================
       8. PORTFOLIO PROGRESS BAR
       ===================================================== */

    const progressBar =
        document.getElementById(
            "progress-bar"
        );


    if (progressBar) {

        const progressObserver =
            new IntersectionObserver(
                function (entries) {

                    entries.forEach(
                        function (entry) {

                            if (
                                entry.isIntersecting
                            ) {

                                const pageIndex =
                                    Array
                                        .from(pages)
                                        .indexOf(
                                            entry.target
                                        );


                                const progress =
                                    (
                                        (
                                            pageIndex + 1
                                        ) /
                                        pages.length
                                    ) * 100;


                                progressBar.style.width =
                                    progress + "%";

                            }

                        }
                    );

                },
                {
                    threshold: 0.5
                }
            );


        pages.forEach(function (page) {

            progressObserver.observe(page);

        });

    }


    /* =====================================================
       9. PAGE LOAD
       ===================================================== */

    window.addEventListener(
        "load",
        function () {

            document.body.classList.add(
                "loaded"
            );

        }
    );

});
