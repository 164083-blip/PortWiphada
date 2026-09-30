document.addEventListener("DOMContentLoaded", function () {

  /* Smooth Scroll */
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {

    link.addEventListener("click", function (e) {

      const targetId = this.getAttribute("href");

      if (targetId === "#") return;

      const target = document.querySelector(targetId);

      if (target) {
        e.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }

    });

  });


  /* Animation */
  const sections = document.querySelectorAll(
    ".section, .portfolio-card, .activity-card, .certificate-card"
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


  sections.forEach(function (section) {
    section.classList.add("hidden");
    observer.observe(section);
  });

});
