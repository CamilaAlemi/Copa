document.addEventListener("DOMContentLoaded", () => {
  console.log(document.querySelectorAll("#grupos .grupo"));
  gsap.registerPlugin(ScrollTrigger);

  const containerGrupos = document.querySelector("#grupos");
  const grupos = gsap.utils.toArray("#grupos .grupo");

  const larguraGrupo = grupos[0].offsetWidth;
  const espacoTela = window.innerWidth;

  gsap.to(containerGrupos, {
    x: () => {
      return -(
        larguraGrupo * (grupos.length - 1) -
        (espacoTela - larguraGrupo) / 2
      );
    },

    ease: "none",

    scrollTrigger: {
      trigger: "#grupos",
      pin: true,
      scrub: 1,

      snap: {
        snapTo: 1 / (grupos.length - 1),
        duration: 0.3,
      },

      end: () => "+=" + larguraGrupo * grupos.length,
    },
  });
});
