/* =========================================
   MÓDULO DE PROJETOS
========================================= */

export const listaProjetos = [

    {
        id: "cesta-solidaria",
        classe: "cesta-solidaria",
        titulo: "Cesta Solidária",
        imagem: "../imagens/cestasolid.png",
        alt: "Voluntários organizando cestas básicas.",
        objetivo: "Oferecer apoio alimentar para famílias em situação de vulnerabilidade."
    },

    {
        id: "vestir",
        classe: "vestir",
        titulo: "Vestir com Dignidade",
        imagem: "../imagens/vestircomdig.png",
        alt: "Voluntários organizando roupas para doação.",
        objetivo: "Melhorar a qualidade de vida e a autoestima das pessoas atendidas."
    },

    {
        id: "educacao",
        classe: "educacao",
        titulo: "Educação que Transforma",
        imagem: "../imagens/educacaoquetransf.png",
        alt: "Crianças e adolescentes participando de atividades educativas.",
        objetivo: "Criar oportunidades através da educação."
    },

    {
        id: "voluntariado",
        classe: "voluntariado",
        titulo: "Voluntariado",
        imagem: "../imagens/voluntariado.png",
        alt: "Voluntários participando de uma ação solidária.",
        objetivo: "Permitir que pessoas participem diretamente das ações da ONG."
    }

];


export function criarProjeto(projeto) {

    return `
        <section
            id="${projeto.id}"
            class="projeto ${projeto.classe}"
        >

            <h2>${projeto.titulo}</h2>

            <img
    src="${projeto.imagem}"
    alt="${projeto.alt}"
    loading="lazy"
    decoding="async"
>

            <h3>Objetivo</h3>

            <p>
                ${projeto.objetivo}
            </p>

        </section>
    `;

}


export function criarListaProjetos() {

    return listaProjetos
        .map(projeto =>
            criarProjeto(projeto)
        )
        .join("");

}