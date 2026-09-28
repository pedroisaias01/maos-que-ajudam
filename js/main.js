/* =========================================
   ARQUIVO PRINCIPAL DA APLICAÇÃO
========================================= */

import {
    carregarPagina,
    iniciarNavegacao
} from "./modules/spa.js";


/* INICIA A NAVEGAÇÃO */

iniciarNavegacao();

iniciarAltoContraste();


/* CARREGA A PÁGINA INICIAL */

carregarPagina("inicio");

import {
    iniciarAltoContraste
} from "./modules/acessibilidade.js";
