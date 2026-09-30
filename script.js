document.addEventListener("DOMContentLoaded", function () {

  /* =========================
     SMOOTH SCROLL
  ========================= */

  document.querySelectorAll('a[href^="#"]').forEach(function (link) {

    link.addEventListener("click", function (event) {

      const targetId = this.getAttribute("href");

      if (targetId === "#") {
        return;
      }

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


  /* =========================
     PROGRESS BAR
  ========================= */

  const progressBar =
    document.getElementById("progress-bar");

  window.addEventListener("scroll", function () {

    const scrollTop =
      window.scrollY;

    const documentHeight =
      document.documentElement.scrollHeight -
      window.innerHeight;

    const progress =
      documentHeight > 0
        ? (scrollTop / documentHeight) * 100
        : 0;

    progressBar.style.width =
      progress + "%";

  });


  /* =========================
     IMAGE MODAL
  ========================= */

  const modal =
    document.getElementById("imageModal");

  const modalImage =
    document.getElementById("modalImage");

  const closeModal =
    document.getElementById("closeModal");

  const images =
    document.querySelectorAll(".clickable-image");


  images.forEach(function (image) {

    image.addEventListener("click", function () {

      modalImage.src = this.src;

      modalImage.alt = this.alt;

      modal.classList.add("show");

      document.body.style.overflow = "hidden";

    });

  });


  /* =========================
     CLOSE MODAL
  ========================= */

  function closeImageModal() {

    modal.classList.remove("show");

    modalImage.src = "";

    document.body.style.overflow = "";

  }


  closeModal.addEventListener(
    "click",
    closeImageModal
  );


  modal.addEventListener(
    "click",
    function (event) {

      if (event.target === modal) {
        closeImageModal();
      }

    }
  );


  document.addEventListener(
    "keydown",
    function (event) {

      if (event.key === "Escape") {
        closeImageModal();
      }

    }
  );

});
