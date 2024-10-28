const denuncias = [
  {
    id: "1",
    titulo: "Cadeirantes não tem rampa de acesso",
    descricao:
      "O local só pode ser acessado através de uma escadaria, sem nenhuma rampa de acesso para cadeirantes",
    logradouro: "Rua Flor Santos",
    numero: 520,
    estado: "MG",
    cidade: "Belo Horizonte",
    userId: "1",
  },
  {
    id: "2",
    titulo: "Piso Tátil Desorienta",
    descricao:
      "O piso tátil do local leva o deficiênte visual até grades e muros, sem outras opções de caminhos alternativos",
    logradouro: "Rua Manuel Silva",
    numero: 105,
    estado: "MG",
    cidade: "Contagem",
    userId: "2",
  },
  {
    id: "3",
    titulo: "Calçada Irregular",
    descricao:
      "Calçada completamente irregular, cheia de buracos, degraus e obstáculos",
    logradouro: "Rua Luiz Teixeira",
    numero: 219,
    estado: "SP",
    cidade: "São Paulo",
    userId: "1",
  },
  {
    id: "4",
    titulo: "Único elevador de acesso quebrado",
    descricao:
      "O único elevador que dá acesso ao local está quebrado, não tem outra maneira de entrar além do lançe de escadas",
    logradouro: "Rua Maria Antonieta",
    numero: 30,
    estado: "SP",
    cidade: "Campinas",
    userId: "2",
  },
  {
    id: "5",
    titulo: "Lorem ipsum dolor sit amet.",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores quas eius aliquam tenetur, consequuntur ipsa fuga similique, quasi quia itaque nostrum ipsam perferendis enim vitae expedita excepturi optio incidunt ab, alias eos omnis. Quo nemo labore pariatur magnam nulla earum, ipsam ea voluptatibus et esse ad consectetur? Quis tempora rerum, eos numquam dolore rem ullam voluptas in? Autem, voluptatem ipsam architecto alias repellendus, porro soluta officia modi earum rem facere vero asperiores fugit reprehenderit consequuntur explicabo eum praesentium atque, ab dignissimos impedit quisquam nemo error magnam. Velit, quibusdam minima et nostrum placeat ducimus rem expedita quis consectetur eius illum praesentium.",
    logradouro: "Rua Maria Teixeira",
    numero: 8205,
    estado: "MG",
    cidade: "Belo Horizonte",
    userId: "2",
  },
  {
    id: "6",
    titulo: "Único elevador de acesso quebrado",
    descricao:
      "O único elevador que dá acesso ao local está quebrado, não tem outra maneira de entrar além do lançe de escadas",
    logradouro: "Rua Maria Antonieta",
    numero: 30,
    estado: "SP",
    cidade: "Campinas",
    userId: "2",
  },
];

// SWITCH "TODAS" & "MINHAS" DENÚNCIAS
document.getElementById("todas-denuncias-btn").onclick = () => {
  console.log("clicou");
  document.getElementById("todas-denuncias-btn").style.backgroundColor =
    "#000000";
  document.getElementById("todas-denuncias-btn").style.color = "#FFFFFF";
  document.getElementById("minhas-denuncias-btn").style.backgroundColor =
    "#FFFFFF";
  document.getElementById("minhas-denuncias-btn").style.color = "#000000";
};
document.getElementById("minhas-denuncias-btn").onclick = () => {
  document.getElementById("minhas-denuncias-btn").style.backgroundColor =
    "#000000";
  document.getElementById("minhas-denuncias-btn").style.color = "#FFFFFF";
  document.getElementById("todas-denuncias-btn").style.backgroundColor =
    "#FFFFFF";
  document.getElementById("todas-denuncias-btn").style.color = "#000000";
};

// CARREGAR DENÚNCIAS
let htmlContent = "";

denuncias.forEach((item) => {
  htmlContent += `
    <div class="denuncia">
      <h3 class="denuncia-titulo">${item.titulo}</h3>
      <p class="denuncia-descricao">${item.descricao}</p>
      <div>
        <img src="../public/icons/ponto-mapa-icon-black.svg" alt="">
        <p class="denuncia-endereco">${item.logradouro}, ${item.numero}</p>
      </div>
    </div>
  `;
});

document.querySelector(".denuncias-container").innerHTML = htmlContent;
