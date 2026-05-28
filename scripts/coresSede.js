const coresPaises = {
    eua: ["#B22234", "#FFFFFF", "#3C3B6E"],
    canada: ["#FF0000", "#FFFFFF", "#D80621"],
};
function atualizarCoresPais(pais) {

    const coresPais = coresPaises[pais]

    if (!coresPais) return

    const corPrincipal = coresPais[0]

    const linhaTopo = document.getElementById("linhaTopo")

    if (linhaTopo) {
        linhaTopo.style.background = `
            linear-gradient(
                to right,
                ${coresPais[0]} 0%,
                ${coresPais[0]} 33%,
                ${coresPais[1]} 33%,
                ${coresPais[1]} 66%,
                ${coresPais[2]} 66%,
                ${coresPais[2]} 100%
            )
        `
    }

    document.querySelectorAll(".cor-pais").forEach(elemento => {
        elemento.style.color = corPrincipal
    })

    document.querySelectorAll(".ano").forEach(elemento => {
        elemento.style.color = corPrincipal
    })
}