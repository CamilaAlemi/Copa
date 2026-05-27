const culturas = {

    brasil: [

        {
            imagem: "../../assets/imgs/Brasil/cultura/festas.webp",

            texto: "Festas tradicionais e roupas típicas fazem parte da identidade cultural brasileira."
        },

        {
            imagem: "../assets/imgs/Brasil/cultura/samba.jpg",

            texto: "O samba representa uma das manifestações culturais mais importantes do país."
        },

        {
            imagem: "../assets/imgs/Brasil/cultura/influenciasculturas.jpg",

            texto: "Influências indígenas, africanas e europeias aparecem na arquitetura e culinária."
        },

        {
            imagem: "../assets/imgs/Brasil/cultura/brasil.jpg",

            texto: "O futebol é uma das maiores paixões do povo brasileiro e faz parte da identidade cultural do país, influenciando costumes, linguagem e celebrações."
        },

      {
    imagem: "../../imgs/Brasil/cultura/paisagem.webp",
    texto: "O Brasil possui paisagens naturais famosas mundialmente, como a Floresta Amazônica, a maior floresta tropical do planeta."
},

    ]

}
function renderizarCultura(pais){

    const container = document.getElementById("cardsCultura")

    container.innerHTML = ""

    culturas[pais].forEach((item, index) => {

        const invertido = index % 2 !== 0

        container.innerHTML += `

            <div class="bloco-cultura ${invertido ? 'invertido' : ''}">

                ${
                    invertido
                    ?
                    `
                    <p>
                        ${item.texto}
                    </p>

                    <img src="${item.imagem}" alt="">
                    `
                    :
                    `
                    <img src="${item.imagem}" alt="">

                    <p>
                        ${item.texto}
                    </p>
                    `
                }

            </div>

        `

    })

}
