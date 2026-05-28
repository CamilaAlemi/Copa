document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".swiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    freeMode: {
      enabled: true,
      momentum: false,
    },
    speed: 3000,
    centeredSlides: false,
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
    },
  });
});
