document.addEventListener("DOMContentLoaded", function () {

  /* เลื่อนหน้าแบบนุ่มนวล */

  document.querySelectorAll('a[href^="#"]').forEach(function (link) {

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


  /* เปิดรูปใหญ่ */

  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  const closeModal = document.getElementById("closeModal");

  const images = document.querySelectorAll(".clickable-image");

  images.forEach(function (image) {

    image.addEventListener("click", function () {

      modalImage.src = this.src;
      modalImage.alt = this.alt;

      modal.classList.add("show");

      document.body.style.overflow = "hidden";

    });

  });


  /* ปิดรูป */

  closeModal.addEventListener("click", function () {

    modal.classList.remove("show");

    document.body.style.overflow = "";

  });


  /* คลิกพื้นหลังเพื่อปิด */

  modal.addEventListener("click", function (event) {

    if (event.target === modal) {

      modal.classList.remove("show");

      document.body.style.overflow = "";

    }

  });


  /* กด ESC เพื่อปิด */

  document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

      modal.classList.remove("show");

      document.body.style.overflow = "";

    }

  });

});
