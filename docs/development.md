#Requisitos X Código Estático

##Header

###Html

`
<section class="menu-container" style="display: none;">
      <div class="menu-header">
        <h2>Menu</h2>
        <button id="fechar-menu">
          <img src="../public/icons/fechar-icon.svg" alt="">
        </button>
      </div>
      <div class="menu-separator"></div>
      <nav class="menu-content">
        <a href="info.html">
          <img src="../public/icons/info-icon.svg" alt="">
          <p>Informações</p>
        </a>
        <a href="denuncias.html">
          <img src="../public/icons/denuncia-icon.svg" alt="">
          <p>Denúncias</p>
        </a>
        <div class="menu-separator"></div>
        <a href="fale-conosco.html">
          <img src="../public/icons/telefone-icon.svg" alt="">
          <p>Fale Conosco</p>
        </a>
      </nav>
</section>
`

###CSS

header {
 height: 4.25rem;
 display: flex;
 align-items: center;
 justify-content: space-between;
 padding: 0 1.5rem;
}

##Botão de Menu

###Html

...
<button id="abrir-menu">
        <img src="../public/icons/menu2-icon.svg" alt="Ícone de Menu Principal">
      </button>
...

###CSS

element.style {
}
index.css:21
header img {
width: 2.5rem;
height: 2.5rem;
}
global.css:7
* {
box-sizing: border-box;
margin: 0;
padding: 0;
font-family: 'Inter', sans-serif;
font-size: 1rem;
}
folha de estilos de agente de usuário
img {
overflow-clip-margin: content-box;
overflow: clip;
}
Herdado debutton#abrir-menu
global.css:24
button {
border: 0;
background-color: transparent;
font-weight: 600;
}
folha de estilos de agente de usuário
button {
font-style: ;
font-variant-ligatures: ;
font-variant-caps: ;
font-variant-numeric: ;
font-variant-east-asian: ;
font-variant-alternates: ;
font-variant-position: ;
font-weight: ;
font-stretch: ;
font-size: ;
font-family: ;
font-optical-sizing: ;
font-size-adjust: ;
font-kerning: ;
font-feature-settings: ;
font-variation-settings: ;
text-rendering: auto;
color: buttontext;
letter-spacing: normal;
word-spacing: normal;
line-height: normal;
text-transform: none;
text-indent: 0px;
text-shadow: none;
text-align: center;
cursor: default;
}
Herdado dehtml
global.css:1
:root {
--main: #000000;
--white: #FFFFFF;
--gray: #EEEEEE;
}
index.css:1
:root {
--main: #000000;
--white: #FFFFFF;
--gray: #EEEEEE;
}

##Logo

###Html

...
<button>
        <img src="../public/img/logo-img.png" alt="Logo da Aplicação">
      </button>

###CSS

img {
    overflow-clip-margin: content-box;
    overflow: clip;
}

##Usuário

###Requisitos:
| RF-001	| Permitir com que o usuário se Cadastre | 	ALTA |
| RF-002 |	Permitir com que o usuário faça Login	| ALTA |
| RF-003 | 	Permitir com que o usuário faça Logout	 | ALTA |

###Html

<button id="abrir-perfil">
        <img src="../public/icons/perfil-icon.svg" alt="Ícone do Menu Usuário">
      </button>

##BODY

###Requisitos:
| RF-0014	| Permitir visualização do mapa | 	ALTA |
| RF-0015 | 	Permitir interação com o mapa |	ALTA |

###Html

<main>
      <img class="imagem-mapa" src="../public/img/map.png" alt="">
      <nav>
        <a href="pesquisar.html">
          <img src="../public/icons/pesquisar-icon.svg" alt="">
        </a>
        <a href="pesquisar.html">
          <img src="../public/icons/ponto-mapa-icon.svg" alt="">
        </a>
        <a href="nova-denuncia.html">
          <img src="../public/icons/mais-icon.svg" alt="">
        </a>
      </nav>
</main>

###CSS

    --main: #000000;
    --white: #FFFFFF;
    --gray: #EEEEEE;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    position: fixed;
    top: 4.25rem;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-self: center;
    object-fit: cover;

##Menu Navegação Lateral

Requisitos:
| RF-004 | 	Cadastrar uma denúncia |	ALTA |
| RF-005 | 	Registrar uma imagem do local da denúncia	 | ALTA |
| RF-004	| Cadastrar uma denúncia	| ALTA |

###Html

<nav>
        <a href="pesquisar.html">
          <img src="../public/icons/pesquisar-icon.svg" alt="">
        </a>
        <a href="pesquisar.html">
          <img src="../public/icons/ponto-mapa-icon.svg" alt="">
        </a>
        <a href="nova-denuncia.html">
          <img src="../public/icons/mais-icon.svg" alt="">
        </a>
      </nav>

###CSS

    --main: #000000;
    --white: #FFFFFF;
    --gray: #EEEEEE;
    box-sizing: border-box;
    margin: 0;
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    position: absolute;
    bottom: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1.5rem;

##Página Nova Denúcia

###Requisitos:
| RF-004	| Cadastrar uma denúncia| 	ALTA |

###Html

<div class="nova-denuncia-card">
        <div class="nova-denuncia-header">
          <h2>Nova Denúncia</h2>
          <a href="index.html">
            <img src="../public/icons/fechar-icon.svg" alt="">
          </a>
        </div>
        <div class="nova-denuncia-content">
          <form id="nova-denuncia-form">
            <div>
              <label>
                <p>Título</p>
                <input type="text" placeholder="Digite o título da denúncia" id="nova-denuncia-titulo">
              </label>
            </div>

            <div>
              <label>
                <p>Descrição</p>
                <textarea placeholder="Descreva o ploblema encontrado" name="nova-denuncia-descricao" id="nova-denuncia-descricao"></textarea>
              </label>
            </div>

            <div>
              <p>Foto do Local <span>(opcional)</span></p>
              <label for="nova-denuncia-foto">
                <p class="nova-denuncia-foto-btn">
                  <img src="../public/icons/imagem-icon.svg" alt="">
                  Selecionar Foto
                </p>
                <input type="file" id="nova-denuncia-foto">
              </label>
              <img src="" alt="" id="preview-foto-local">
            </div>

            <div>
              <label>
                <p>Localização</p>
                <input type="text" placeholder="Digite o endereço da denúncia" id="nova-denuncia-localizacao">
              </label>
              <p class="localizacao-btn" id="localizacao-atual-btn">
                <img src="../public/icons/ponto-mapa-icon-black.svg" alt="">
                Usar localização atual
              </p>
            </div>
            <button type="button" id="nova-denuncia-btn">
              Registrar Denúncia
            </button>
          </form>
        </div>
      </div>

###CSS

     --main: #000000;
    --white: #FFFFFF;
    --gray: #EEEEEE;
    box-sizing: border-box;
    margin: 0;
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    width: 90%;
    position: fixed;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    padding: 1.5rem;
    background-color: var(--white);
    border-radius: 20px;
    overflow-y: auto;
    overflow-x: hidden;
    max-height: 90%; 

##Página Informações

Requisitos:
RF-013	Acessar informações de contato com os administradores do projeto	BAIXA
Requisitos Não Funcionais


###Html

<div class="info-card">
        <div class="info-header">
          <h2>Informações</h2>
          <a href="index.html">
            <img src="../public/icons/fechar-icon.svg" alt="">
          </a>
        </div>
        <div class="info-content">
          <p>
            A falta de acessibilidade na mobilidade urbana é uma realidade na
            vida de milhares de pessoas ao redor do mundo. Pensando somente no
            Brasil, essa situação não é diferente e se manifesta nas
            irregularidades das calçadas, na falta de rampas de acesso para
            cadeirantes, na precarização de guias nas calçadas para deficientes
            visuais, dentre outros inúmeros cenários. <br><br>
            Esse projeto tem como objetivo oferecer uma plataforma na qual a
            população terá a oportunidade de fornecer dados que ajudem na
            localização de espaços que possam oferecer algum tipo de impedimento
            no que se refere à acessibilidade/mobilidade urbana. Esses dados
            podem ser utilizados posteriormente para alertar a população que
            mais sofre com essa situação, além de auxiliar os órgãos competentes
            na resolução do problema
          </p>
        </div>
      </div>

###CSS

    --main: #000000;
    --white: #FFFFFF;
    --gray: #EEEEEE;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
    font-size: 1rem;

##Página Pesquisa

Requisitos:
| RF-006 |	Listar todas as denúncias	 | MÉDIA |
| RF-007 |	Listar denúncias por usuário | 	MÉDIA |
| RF-008	| Listar denúncias por prefeitura |	MÉDIA |
| RF-009 |	Listar denúncias por estados |	MÉDIA |
| RF-010	| Acessar informações sobre a denúncia	| ALTA |
| RF-011	| Acessar diversas estatísticas baseadas nos dados cadastrados |	 MÉDIA |
| RF-012 |	Acessar mais informações sobre o projeto	| BAIXA |

###Html

<section class="resultados-container">
        <div class="resultado">
          <h3 class="resultado-titulo">titulo</h3>
          <p class="resultado-descricao">descrição</p>
          <div>
            <img src="../public/icons/ponto-mapa-icon-black.svg" alt="">
            <p class="resultado-endereco">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Asperiores quas eius aliquam tenetur, consequuntur ipsa fuga
              similique, quasi quia itaque nostrum ipsam perferendis enim vitae
              expedita excepturi optio incidunt ab, alias eos omnis. Quo nemo
              labore pariatur magnam nulla earum, ipsam ea voluptatibus et esse
              ad consectetur? Quis tempora rerum, eos numquam dolore rem ullam
              voluptas in? Autem, voluptatem ipsam architecto alias repellendus,
              porro soluta officia modi earum rem facere vero asperiores fugit
              reprehenderit consequuntur explicabo eum praesentium atque, ab
              dignissimos impedit quisquam nemo error magnam. Velit, quibusdam
              minima et nostrum placeat ducimus rem expedita quis consectetur
              eius illum praesentium.
            </p>
          </div>
        </div>
      </section>

###CSS

  --main: #000000;
    --white: #FFFFFF;
    --gray: #EEEEEE;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    overflow-y: hidden;

    --main: #000000;
    --white: #FFFFFF;
    --gray: #EEEEEE;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
    font-size: 1rem;


##Página Fale conosco

###Requisitos:
| RF-013	| Acessar informações de contato com os administradores do projeto | 	BAIXA |

###Html

<div class="contato-card">
        <div class="contato-header">
          <h2>Fale Conosco</h2>
          <a href="index.html">
            <img src="../public/icons/fechar-icon.svg" alt="">
          </a>
        </div>
        <div class="contato-content">
          <div>
            <img src="../public/icons/whatsapp-icon.svg" alt="">
            <p>(31) 99999-9999</p>
          </div>
          <div>
            <img src="../public/icons/telefone-icon.svg" alt="">
            <p>(31) 99999-9999</p>
          </div>
          <div>
            <img src="../public/icons/mail-icon.svg" alt="">
            <p>contato@mobiurbana.com</p>
          </div>
        </div>
      </div>

###CSS

    --main: #000000;
    --white: #FFFFFF;
    --gray: #EEEEEE;
    box-sizing: border-box;
    margin: 0;
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    width: 90%;
    position: fixed;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    padding: 1.5rem;
    background-color: var(--white);
    border-radius: 20px;


