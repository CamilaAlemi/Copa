document.addEventListener("DOMContentLoaded", () => {
  const gruposInfos = [
    {
      nome: "Grupo A",
      paises: "México, África do Sul, Coreia do Sul e República Tcheca",
      img: "../assets/imgs/grupoABanner.png",
    },
    {
      nome: "Grupo C",
      paises: "Brasil, Marrocos, Haiti e Escócia",
      img: "../assets/imgs/grupoCBanner.png",
    },
    {
      nome: "Grupo G",
      paises: "Bélgica, Egito, Irã e Nova Zelândia",
      img: "../assets/imgs/grupoGBanner.png",
    },
    {
      nome: "Grupo J",
      paises: "Argentina, Argélia, Áustria e Jordânia",
      img: "../assets/imgs/grupoJBanner.png",
    },
  ];

  let imagemFundo = document.getElementById("imgFundo");
  let paisBanner = document.getElementById("paisBanner");
  let tituloBanner = document.getElementById("tituloBanner");
  const linhas = document.getElementById("linhasDecorativas");
  const btnE = document.getElementById("btnE");
  const btnD = document.getElementById("btnD");
  let indice = 0;

  function removeSelecao() {
    linhas.classList.remove("animarLinhaP");
    linhas.classList.remove("animarLinhaA");
    tituloBanner.classList.remove("animarLetraP");
    tituloBanner.classList.remove("animarLetraA");
    paisBanner.classList.remove("animarLetraP");
    paisBanner.classList.remove("animarLetraA");
  }

  function resetaAnimacao() {
    void linhas.offsetWidth;
    void tituloBanner.offsetWidth;
  }

  function alteraInformacoes(indice) {
    imagemFundo.src = gruposInfos[indice].img;
    paisBanner.textContent = gruposInfos[indice].paises;
    setTimeout(() => {
      tituloBanner.textContent = gruposInfos[indice].nome;
    }, 400);
  }

  btnD.addEventListener("click", () => {
    removeSelecao();
    resetaAnimacao();
    indice++;
    if (indice > gruposInfos.length - 1) {
      indice = 0;
    }
    alteraInformacoes(indice);
    linhas.classList.add("animarLinhaP");
    tituloBanner.classList.add("animarLetraP");
    paisBanner.classList.add("animarLetraP");
  });

  btnE.addEventListener("click", () => {
    removeSelecao();
    resetaAnimacao();
    indice--;
    if (indice < 0) {
      indice = gruposInfos.length - 1;
    }
    alteraInformacoes(indice);
    linhas.classList.add("animarLinhaA");
    tituloBanner.classList.add("animarLetraA");
    paisBanner.classList.add("animarLetraA");
  });
});
