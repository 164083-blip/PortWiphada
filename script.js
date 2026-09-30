// Portfolio Wiphada
// Smooth scrolling และ animation เล็กน้อย

document.addEventListener("DOMContentLoaded", () => {

  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener("click", function (e) {

      const target = document.querySelector(this.getAttribute("href"));

      if (target) {
        e.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }

    });
  });


  // แสดง animation เมื่อเลื่อนถึงแต่ละส่วน
  const cards = document.querySelectorAll(
    ".portfolio-card, .activity-card, .certificate-card, .profile-box, .education-card"
  );

  const observer = new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }

      });

    },
    {
      threshold: 0.12
    }
  );


  cards.forEach(card => {
    card.classList.add("hidden");
    observer.observe(card);
  });

});
