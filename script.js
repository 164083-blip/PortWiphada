/* =====================================================
   WIPHADA PORTFOLIO
   JAVASCRIPT
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ================= MOBILE MENU ================= */

    const menuToggle =
        document.querySelector(".menu-toggle");

    const navLinks =
        document.querySelector(".nav-links");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", () => {

            navLinks.classList.toggle("active");

            const isOpen =
                navLinks.classList.contains("active");

            menuToggle.textContent =
                isOpen ? "✕" : "☰";

        });


        document.querySelectorAll(".nav-links a")
            .forEach(link => {

                link.addEventListener("click", () => {

                    navLinks.classList.remove("active");

                    menuToggle.textContent = "☰";

                });

            });

    }


    /* ================= SCROLL REVEAL ================= */

    const revealElements =
        document.querySelectorAll(".reveal");

    const revealObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("show");

                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach(element => {

        revealObserver.observe(element);

    });


    /* ================= ACTIVE NAV ================= */

    const sections =
        document.querySelectorAll("section[id]");

    const navItems =
        document.querySelectorAll(".nav-links a");

    const activeObserver =
        new IntersectionObserver(
            (entries) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        const id =
                            entry.target.getAttribute("id");

                        navItems.forEach(link => {

                            link.classList.remove("active");

                            if (
                                link.getAttribute("href") ===
                                "#" + id
                            ) {

                                link.classList.add("active");

                            }

                        });

                    }

                });

            },
            {
                rootMargin:
                    "-30% 0px -60% 0px"
            }
        );


    sections.forEach(section => {

        activeObserver.observe(section);

    });


    /* ================= SMOOTH SCROLL ================= */

    document.querySelectorAll('a[href^="#"]')
        .forEach(link => {

            link.addEventListener("click", function (event) {

                const targetId =
                    this.getAttribute("href");

                const target =
                    document.querySelector(targetId);

                if (!target) return;

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            });

        });


    /* ================= IMAGE FALLBACK ================= */

    document.querySelectorAll("img")
        .forEach(img => {

            img.addEventListener("error", () => {

                img.style.background =
                    "#fff1f3";

                img.style.minHeight =
                    "200px";

                console.warn(
                    "ไม่พบรูป:",
                    img.getAttribute("src")
                );

            });

        });


    /* ================= INITIAL REVEAL ================= */

    setTimeout(() => {

        document
            .querySelectorAll(".hero .reveal")
            .forEach(element => {

                element.classList.add("show");

            });

    }, 200);

});
