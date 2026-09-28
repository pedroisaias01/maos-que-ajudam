/* =========================================
   MÓDULO DAS PÁGINAS DA SPA
========================================= */

import {
    criarListaProjetos
} from "./projetos.js";


export const paginas = {


    /* =====================================
       PÁGINA INICIAL
    ===================================== */

    inicio: `

        <section class="apresentacao-inicial">

            <img
                src="../imagens/voluntarios.png"
                alt="Voluntários organizando doações para famílias em situação de vulnerabilidade"
            >

            <h2>
                Seja uma mão amiga nesse momento difícil!
            </h2>

            <p>
                Em meio a esse momento delicado venha fazer parte
                do nosso projeto solidário, e seja uma mão amiga
                para quem realmente precise!
            </p>

        </section>


        <section class="quem-somos">

            <h2>Quem somos</h2>

            <p>
                Somos uma organização aberta que tem como objetivo
                ajudar pessoas carentes em situação vulnerável.
            </p>

            <p>
                Já são vários anos ajudando famílias carentes e necessitadas,
                hoje atuamos em mais de cinco estados diferentes ajudando
                pessoas de todas as maneiras possíveis!
            </p>

            <p>
                Nossa missão é poder ajudar mais pessoas carentes,
                e também arrecadar ajuda de colaboradores que se
                solidarizam com o nosso projeto.
            </p>

            <p>
                Nosso objetivo é chegar ao número de 500 mil pessoas
                ajudadas até o final de dezembro de 2026.
            </p>

        </section>


        <section class="iniciativas">

            <h2>Iniciativas Solidárias</h2>


            <h3>Cesta solidária</h3>

            <p>
                Essa iniciativa foi fundada para ajudar pessoas em estado
                de pobreza onde quase sempre passam necessidades alimentares.
            </p>

            <p>
                Essa iniciativa é um dos pilares que sustentam nosso projeto,
                foi onde tudo começou, ajudar pessoas com cestas de alimentação
                é gratificante até hoje!

                <br>

                O mais gratificante é receber ajuda de todo o Brasil,
                muitas pessoas se solidarizaram, e a distância nunca foi
                um problema.
            </p>


            <h3>Vestir com Dignidade</h3>

            <p>
                Esse projeto é destinado a ajudar pessoas em situação de
                vulnerabilidade a terem acesso a roupas adequadas,
                contribuindo também para sua autoestima.

                <br>

                Quem não gosta de se vestir bem? Esse projeto abrange todas
                as pessoas carentes, adultos, crianças, idosos e bebês.
            </p>


            <h3>Educação que Transforma</h3>

            <p>
                Não podemos esquecer do futuro da nossa nação.

                <br>

                Sabemos o quanto a educação é importante, e sabemos o quanto
                é difícil para algumas crianças e jovens terem acesso à educação.
            </p>

            <p>
                Pensando nisso nossa ONG tomou a decisão de abrir escolas
                totalmente gratuitas e com fornecimento completo de material
                didático.

                <br>

                Mas isso só foi possível através da ajuda que tivemos em prol
                dessa causa, foram muitos patrocinadores que se solidarizaram
                em ajudar financeiramente, presencialmente e materialmente.
            </p>

            <p>
                E não podemos esquecer das pessoas que nos apoiaram,
                foram milhares de pessoas de todo o Brasil.

                <br>

                Isso só foi possível por causa de nossos apoiadores,
                esse foi um marco muito importante para a história da nossa ONG!
            </p>

        </section>


        <section class="publico">

            <h2>Público Atendido</h2>

            <ul>

                <li>
                    <strong>
                        Famílias em situação de vulnerabilidade
                    </strong>
                </li>

                <li>
                    <strong>
                        Crianças e adolescentes
                    </strong>
                </li>

                <li>
                    <strong>
                        Pessoas que precisam de apoio emergencial
                    </strong>
                </li>

            </ul>

        </section>


        <section class="como-ajudar">

            <h2>Como ajudar?</h2>

            <ul>

                <li>
                    <strong>Doação</strong>
                    <br>

                    Seja um doador, ajude pessoas carentes, doe roupas,
                    alimentos, material escolar e até mesmo faça sua
                    doação com qualquer valor em dinheiro através da
                    nossa página de doação.
                </li>

                <li>
                    <strong>Voluntariado</strong>
                    <br>

                    Também contamos com ajuda de milhares de voluntários
                    que se disponibilizam em ajudar na distribuição e em
                    todo serviço necessário.
                </li>

                <li>
                    <strong>Participação em campanhas</strong>
                    <br>

                    Se você quer participar de campanhas e nos ajudar
                    a crescer mais, temos uma página onde será feito
                    seu cadastro com seus dados informados e nosso time
                    entrará em contato confirmando e alinhando algumas
                    informações.
                </li>

            </ul>

        </section>
    `,


    /* =====================================
       PROJETOS
    ===================================== */

    projetos: `

        <section class="projetos">

            <h2>Projetos</h2>

            <p>
                Nessa página você verá nossos projetos realizados,
                são inúmeros projetos ao longo dos anos que se passaram!
            </p>

        </section>

        ${criarListaProjetos()}

    `,


    /* =====================================
       CADASTRO
    ===================================== */

    cadastro: `

        <section class="apresentacao-cadastro">

            <h2>Faça seu Cadastro</h2>

            <p>
                Aqui você poderá fazer parte do time
                <strong>MÃOS QUE AJUDAM</strong>.
                É muito simples, basta selecionar o tipo de cadastro
                e seguir informando seus dados nos campos do formulário.
                Por fim, aperte no botão de enviar cadastro.
                Seus dados serão analisados pelo nosso time e dentro de
                24 horas daremos um retorno.
            </p>

            <h2>PREENCHA OS CAMPOS A SEGUIR</h2>

        </section>


        <form
            class="formulario-cadastro"
            id="formCadastro"
        >

            <fieldset>

                <legend>
                    Tipo de Cadastro
                </legend>

                <label for="tipo">
                    Escolha o tipo de cadastro
                </label>

                <select
                    name="tipo"
                    id="tipo"
                    required
                >

                    <option value="">
                        Selecione
                    </option>

                    <option value="doador">
                        Doador
                    </option>

                    <option value="voluntario">
                        Voluntário
                    </option>

                    <option value="preciso-de-ajuda">
                        Preciso de ajuda
                    </option>

                </select>

            </fieldset>


            <fieldset>

                <legend>
                    Informações Pessoais
                </legend>

                <label for="nome">
                    Nome Completo
                </label>

                <input
                    type="text"
                    id="nome"
                    name="nome"
                    required
                >

                <label for="email">
                    E-mail
                </label>

                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                >

                <label for="cpf">
                    CPF
                </label>

                <input
                    type="text"
                    id="cpf"
                    name="cpf"
                    pattern="[0-9]{3}\\.[0-9]{3}\\.[0-9]{3}-[0-9]{2}"
                    placeholder="000.000.000-00"
                    title="Formato: 000.000.000-00"
                    required
                >

                <label for="nascimento">
                    Data de Nascimento
                </label>

                <input
                    type="date"
                    id="nascimento"
                    name="nascimento"
                    required
                >

                <label for="tel">
                    Telefone
                </label>

                <input
                    type="tel"
                    id="tel"
                    name="telefone"
                    pattern="\\([0-9]{2}\\) [0-9]{5}-[0-9]{4}"
                    placeholder="(00) 00000-0000"
                    title="Formato: (00) 00000-0000"
                    required
                >

            </fieldset>


            <fieldset>

                <legend>
                    Endereço
                </legend>

                <label for="rua">
                    Rua / Avenida
                </label>

                <input
                    type="text"
                    id="rua"
                    name="rua"
                    required
                >

                <label for="setor">
                    Setor
                </label>

                <input
                    type="text"
                    id="setor"
                    name="setor"
                >

                <label for="numero">
                    N°
                </label>

                <input
                    type="text"
                    id="numero"
                    name="numero"
                >

                <label for="cidade">
                    Cidade
                </label>

                <input
                    type="text"
                    id="cidade"
                    name="cidade"
                    required
                >

                <label for="estado">
                    Estado
                </label>

                <input
                    type="text"
                    id="estado"
                    name="estado"
                    required
                >

                <label for="cep">
                    CEP
                </label>

                <input
                    type="text"
                    id="cep"
                    name="cep"
                    pattern="[0-9]{5}-[0-9]{3}"
                    placeholder="00000-000"
                    title="Formato: 00000-000"
                    required
                >

            </fieldset>


            <fieldset>

                <legend>
                    Observações
                </legend>

                <label for="mensagem">
                    Mensagem
                </label>

                <textarea
                    id="mensagem"
                    name="mensagem"
                    placeholder="Observações"
                ></textarea>

            </fieldset>


            <button type="submit">
                Enviar
            </button>

        </form>


        <div
            class="alerta alerta-sucesso"
            role="alert"
        >
            Cadastro preenchido corretamente.
            Os dados estão prontos para envio.
        </div>


        <div
            class="alerta alerta-erro"
            role="alert"
        >
            Atenção: verifique os campos obrigatórios antes de enviar.
        </div>


        <section class="cadastros-salvos">

            <h2>Cadastros salvos</h2>

            <div id="listaCadastros">
                Nenhum cadastro salvo.
            </div>

        </section>


        <div
            class="toast"
            role="status"
            aria-live="polite"
        >
            ✓ Cadastro salvo com sucesso!
        </div>

    `

};