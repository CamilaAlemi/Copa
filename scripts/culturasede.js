

const culturas = {


 canada: [

    {
        imagem: "../../assets/imgs/canada/cultura/aurora.jpg",

        texto: "A Aurora Boreal é um dos fenômenos naturais mais impressionantes do Canadá. Durante o inverno, luzes coloridas iluminam o céu das regiões mais ao norte do país, atraindo turistas de todo o mundo."
    },

    {
        imagem: "../../assets/imgs/canada/cultura/syrup.png",

        texto: "O maple syrup, ou xarope de bordo, é um dos maiores símbolos nacionais do Canadá. Produzido a partir da seiva das árvores de bordo, ele é utilizado em panquecas, sobremesas e diversas receitas tradicionais."
    },

    {
        imagem: "../../assets/imgs/canada/cultura/hoquei.webp",

        texto: "O hóquei no gelo ocupa um lugar especial na cultura canadense. O esporte é acompanhado com paixão por milhões de pessoas e faz parte da identidade nacional desde o século XIX."
    },

    {
        imagem: "../../assets/imgs/canada/cultura/montanhas.jpg",

        texto: "As Montanhas Rochosas Canadenses formam uma das paisagens naturais mais famosas do planeta. Com lagos cristalinos, florestas e picos cobertos de neve, a região é um dos principais destinos turísticos do país."
    },

    {
        imagem: "../../assets/imgs/canada/cultura/multicultaralismo.jpg",

        texto: "O Canadá é reconhecido por sua diversidade cultural. Pessoas de diferentes origens, idiomas e tradições convivem no país, tornando cidades como Toronto, Vancouver e Montreal verdadeiros centros multiculturais."
    },

    {
        imagem: "../../assets/imgs/canada/cultura/inverno.webp",

        texto: "Os festivais de inverno são uma tradição canadense. Eventos com esculturas de gelo, patinação, música e gastronomia celebram a estação mais marcante do país e atraem visitantes de diversas partes do mundo."
    }

],
eua: [

    {
        imagem: "../../assets/imgs/eua/cultura/holly.jpg",

        texto: "Hollywood, localizada em Los Angeles, é considerada a capital mundial do cinema. A indústria cinematográfica americana produziu alguns dos filmes mais influentes da história e exerce grande impacto na cultura global."
    },

    {
        imagem: "../../assets/imgs/eua/cultura/diversidade.jpg",

        texto: "Os Estados Unidos são conhecidos por sua diversidade cultural. Ao longo dos séculos, milhões de imigrantes de diferentes partes do mundo contribuíram para a formação de uma sociedade multicultural."
    },

    {
        imagem: "../../assets/imgs/eua/cultura/parques.webp",

        texto: "O país abriga alguns dos parques nacionais mais famosos do planeta, como Yellowstone, Grand Canyon e Yosemite. Essas áreas preservam paisagens naturais impressionantes e recebem milhões de visitantes todos os anos."
    },

    {
        imagem: "../../assets/imgs/eua/cultura/esportes.jpg",

        texto: "O esporte ocupa um papel importante na cultura americana. Modalidades como futebol americano, basquete, beisebol e hóquei atraem grandes públicos e movimentam bilhões de dólares anualmente."
    },

    {
        imagem: "../../assets/imgs/eua/cultura/musica.webp",

        texto: "Os Estados Unidos tiveram papel fundamental no desenvolvimento de gêneros musicais como jazz, blues, rock, hip-hop e country. A influência da música americana pode ser observada em praticamente todos os continentes."
    },


],

}
function renderizarCultura(pais){

    const container = document.getElementById("cardsCultura")

    container.innerHTML = ""

    culturas[pais].forEach((item, index) => {

        const invertido = index % 2 !== 0
console.log(item.imagem);
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
