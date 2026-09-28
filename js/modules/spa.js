/* =========================================
   MÓDULO DA SPA
========================================= */

import {
    paginas
} from "./paginas.js";

import {
    ativarFormularioCadastro
} from "./formulario.js";


const conteudo =
    document.getElementById(
        "conteudo"
    );


export function carregarPagina(pagina) {

    if (paginas[pagina]) {

        conteudo.innerHTML =
            paginas[pagina];

    } else {

        conteudo.innerHTML =
            paginas.inicio;

    }


    if (pagina === "cadastro") {

        ativarFormularioCadastro();

    }

    conteudo.focus();

}


/* =========================================
   NAVEGAÇÃO
========================================= */

export function iniciarNavegacao() {

    const links =
        document.querySelectorAll(
            "[data-pagina]"
        );


    links.forEach(link => {

        link.addEventListener(
            "click",
            function (evento) {

                evento.preventDefault();


                const pagina =
                    this.dataset.pagina;


                const destino =
                    this.getAttribute(
                        "href"
                    );


                carregarPagina(
                    pagina
                );


                /* ATUALIZA A URL */

                if (destino) {

                    history.pushState(
                        null,
                        "",
                        destino
                    );

                }


                /* ROLA PARA PROJETO ESPECÍFICO */

                if (
                    destino &&
                    destino !== "#inicio" &&
                    destino !== "#projetos" &&
                    destino !== "#cadastro"
                ) {

                    requestAnimationFrame(
                        () => {

                            const elemento =
                                document.querySelector(
                                    destino
                                );


                            if (elemento) {

                                elemento.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start"
                                });

                            }

                        }
                    );

                }

            }
        );

    });

}