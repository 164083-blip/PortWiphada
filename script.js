/* ===============================
   Portfolio JavaScript
   =============================== */

document.addEventListener("DOMContentLoaded", function () {

    /* Smooth scroll สำหรับเมนู */

    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (targetId === "#") return;

            const target = document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    /* Animation ตอนเลื่อนหน้า */

    const cards = document.querySelectorAll(
        ".work-card, .certificate-card, .profile-box, .sop-box"
    );

    const observer = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },
        {
            threshold: 0.12
        }
    );


    cards.forEach(function (card) {

        card.classList.add("fade-item");

        observer.observe(card);

    });

});
