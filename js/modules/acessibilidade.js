export function iniciarAltoContraste() {

    const botao =
        document.getElementById("botaoContraste");

    if (!botao) {
        return;
    }


    function aplicarContraste(ativo) {

        document.body.classList.toggle(
            "alto-contraste",
            ativo
        );

        botao.setAttribute(
            "aria-pressed",
            String(ativo)
        );

        localStorage.setItem(
            "altoContraste",
            String(ativo)
        );
    }


    const contrasteSalvo =
        localStorage.getItem("altoContraste")
        === "true";

    aplicarContraste(contrasteSalvo);


    botao.addEventListener(
        "click",
        function () {

            const ativo =
                !document.body.classList.contains(
                    "alto-contraste"
                );

            aplicarContraste(ativo);

        }
    );

}