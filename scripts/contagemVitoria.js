document.addEventListener("DOMContentLoaded", () => {
  const containerVitorias = document.querySelector("#classificacao");
  const paisesV = document.querySelectorAll(".paisVitoria");
  let animou = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !animou) {
        animou = true;
        paisesV.forEach((paisV) => {
          paisV.classList.add("visivel");
          let contagem = 0;

          let textoV = paisV.querySelector(".vitorias");
          let vitorias = Number(paisV.dataset.vitorias);

          const intervalo = setInterval(() => {
            contagem++;
            textoV.textContent = `${contagem} Vítorias`;

            if (contagem >= vitorias) {
              clearInterval(intervalo);
            }
          }, 400);
        });
        observer.unobserve(entry.target);
      }
    });
  });
  observer.observe(containerVitorias);
});
