/* =========================================
   MÓDULO DO FORMULÁRIO
========================================= */

import {
    obterCadastros,
    salvarCadastro
} from "./storage.js";


/* =========================================
   MOSTRA CADASTROS SALVOS
========================================= */

function mostrarCadastrosSalvos() {

    const lista =
        document.getElementById(
            "listaCadastros"
        );


    if (!lista) {
        return;
    }


    const cadastros =
        obterCadastros();


    if (cadastros.length === 0) {

        lista.innerHTML =
            "<p>Nenhum cadastro salvo.</p>";

        return;

    }


    lista.innerHTML =
        cadastros
            .map(cadastro => {

                let dataFormatada =
                    "Data não disponível";


                if (
                    cadastro.dataCadastro &&
                    typeof dayjs !== "undefined"
                ) {

                    dataFormatada =
                        dayjs(
                            cadastro.dataCadastro
                        ).format(
                            "DD/MM/YYYY HH:mm"
                        );

                }


                return `
                    <div class="cadastro-salvo">

                        <strong>
                            ${cadastro.nome}
                        </strong>

                        <p>
                            Tipo:
                            ${cadastro.tipo}
                        </p>

                        <p>
                            Cadastro realizado em:
                            ${dataFormatada}
                        </p>

                    </div>
                `;

            })
            .join("");

}


/* =========================================
   ATIVA O FORMULÁRIO
========================================= */

export function ativarFormularioCadastro() {

    const formulario =
        document.getElementById(
            "formCadastro"
        );


    if (!formulario) {
        return;
    }


    const alertaSucesso =
        document.querySelector(
            ".alerta-sucesso"
        );

    const alertaErro =
        document.querySelector(
            ".alerta-erro"
        );

    const toast =
        document.querySelector(
            ".toast"
        );

    const campos =
        formulario.querySelectorAll(
            "input[required], select[required]"
        );


    mostrarCadastrosSalvos();


    /* ESCONDE MENSAGENS */

    if (alertaSucesso) {
        alertaSucesso.style.display = "none";
    }

    if (alertaErro) {
        alertaErro.style.display = "none";
    }

    if (toast) {
        toast.style.display = "none";
    }


    formulario.noValidate = true;


    /* =====================================
       VALIDAÇÃO DOS CAMPOS
    ===================================== */

    function validarCampo(campo) {

        let mensagem =
            campo.nextElementSibling;


        if (
            !mensagem ||
            !mensagem.classList.contains(
                "mensagem-erro-campo"
            )
        ) {

            mensagem =
                document.createElement(
                    "span"
                );

            mensagem.classList.add(
                "mensagem-erro-campo"
            );

            campo.insertAdjacentElement(
                "afterend",
                mensagem
            );

        }


        if (campo.validity.valid) {

            campo.classList.remove(
                "campo-invalido"
            );

            campo.classList.add(
                "campo-valido"
            );

            mensagem.textContent = "";

        } else {

            campo.classList.remove(
                "campo-valido"
            );

            campo.classList.add(
                "campo-invalido"
            );


            if (
                campo.validity.valueMissing
            ) {

                mensagem.textContent =
                    "Este campo é obrigatório.";

            } else if (
                campo.validity.typeMismatch
            ) {

                mensagem.textContent =
                    "Digite um valor em formato válido.";

            } else if (
                campo.validity.patternMismatch
            ) {

                mensagem.textContent =
                    campo.title ||
                    "O formato informado está incorreto.";

            } else {

                mensagem.textContent =
                    "Verifique este campo.";

            }

        }

    }


    /* =====================================
       EVENTOS INPUT E CHANGE
    ===================================== */

    formulario.addEventListener(
        "input",
        function () {

            if (alertaErro) {

                alertaErro.style.display =
                    "none";

            }

            if (alertaSucesso) {

                alertaSucesso.style.display =
                    "none";

            }

        }
    );


    campos.forEach(campo => {

        campo.addEventListener(
            "input",
            function () {

                validarCampo(campo);

            }
        );


        campo.addEventListener(
            "change",
            function () {

                validarCampo(campo);

            }
        );

    });


    /* =====================================
       EVENTO SUBMIT
    ===================================== */

    formulario.addEventListener(
        "submit",
        function (evento) {

            evento.preventDefault();


            campos.forEach(campo => {

                validarCampo(campo);

            });


            if (
                !formulario.checkValidity()
            ) {

                if (alertaErro) {

                    alertaErro.style.display =
                        "block";

                }

                if (alertaSucesso) {

                    alertaSucesso.style.display =
                        "none";

                }

                if (toast) {

                    toast.style.display =
                        "none";

                }


                formulario.reportValidity();

                return;

            }


            /* CAPTURA OS DADOS */

            const dadosFormulario =
                new FormData(formulario);


            const cadastro =
                Object.fromEntries(
                    dadosFormulario.entries()
                );


            cadastro.dataCadastro =
                new Date().toISOString();


            /* SALVA USANDO O MÓDULO STORAGE */

            salvarCadastro(cadastro);


            /* ATUALIZA A INTERFACE */

            mostrarCadastrosSalvos();


            /* FEEDBACK */

            if (alertaSucesso) {

                alertaSucesso.style.display =
                    "block";

            }

            if (alertaErro) {

                alertaErro.style.display =
                    "none";

            }


            if (toast) {

                toast.style.display =
                    "block";


                setTimeout(
                    function () {

                        toast.style.display =
                            "none";

                    },
                    3000
                );

            }


            console.log(
                "Cadastro salvo:",
                cadastro
            );


            /* LIMPA O FORMULÁRIO */

            formulario.reset();


            campos.forEach(campo => {

                campo.classList.remove(
                    "campo-valido",
                    "campo-invalido"
                );


                const mensagem =
                    campo.nextElementSibling;


                if (
                    mensagem &&
                    mensagem.classList.contains(
                        "mensagem-erro-campo"
                    )
                ) {

                    mensagem.textContent =
                        "";

                }

            });

        }
    );

}