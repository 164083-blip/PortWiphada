document.addEventListener("DOMContentLoaded", function () {

    /* ================= MENU ================= */

    const menuBtn = document.getElementById("menuBtn");
    const navMenu = document.getElementById("navMenu");

    menuBtn.addEventListener("click", function () {

        navMenu.classList.toggle("active");

        if (navMenu.classList.contains("active")) {
            menuBtn.textContent = "✕";
        } else {
            menuBtn.textContent = "☰";
        }

    });


    /* ================= CLOSE MENU ================= */

    const navLinks = document.querySelectorAll(".nav-menu a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navMenu.classList.remove("active");

            menuBtn.textContent = "☰";

        });

    });


    /* ================= SCROLL EFFECT ================= */

    window.addEventListener("scroll", function () {

        const navbar =
            document.querySelector(".navbar");

        if (window.scrollY > 50) {

            navbar.style.boxShadow =
                "0 10px 35px rgba(103,16,29,.09)";

        } else {

            navbar.style.boxShadow =
                "0 8px 30px rgba(70,20,30,.04)";

        }

    });


    /* ================= IMAGE CHECK ================= */

    const images =
        document.querySelectorAll("img");

    images.forEach(function (img) {

        img.addEventListener("error", function () {

            console.warn(
                "ไม่พบรูป:",
                img.getAttribute("src")
            );

        });

    });


    /* ================= TOP BUTTON ================= */

    document.querySelectorAll('a[href="#top"]')
        .forEach(function (button) {

            button.addEventListener("click", function (event) {

                event.preventDefault();

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            });

        });

});
