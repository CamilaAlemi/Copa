document.addEventListener("DOMContentLoaded", () => {
  const titulos = document.querySelectorAll(".titulos");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("ativo");
      } else {
        entry.target.classList.remove("ativo");
      }
    });
  });

  titulos.forEach((titulo) => {
    observer.observe(titulo);
  });
});
