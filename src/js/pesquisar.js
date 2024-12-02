const baseURL = "http://localhost:3000";

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

const listaDenuncias = [];
let listaPesquisa = [];

document.addEventListener("DOMContentLoaded", async () => {
  const resp = await fetch(`${baseURL}/denuncias`);
  const data = await resp.json();

  for (let item of data) {
    listaDenuncias.push(item);
  }

  let htmlContent = "";
  listaDenuncias.forEach((item) => {
    htmlContent += `
<div class="resultado">
<h3 class="resultado-titulo">${item.titulo}</h3>
<p class="resultado-descricao">${item.descricao}</p>
<div>
<img src="../public/icons/ponto-mapa-icon-black.svg" alt="">
<p class="resultado-endereco">${item.logradouro}, ${item.numero}</p>
</div>
</div>
`;
  });

  document.querySelector(".resultados-container").innerHTML = htmlContent;
});

document.getElementById("pesquisa-input").addEventListener('input', async () => {
  const valorInput = document.getElementById("pesquisa-input").value.trim().toLowerCase();

  // Limpa a lista de pesquisa antes de começar a nova filtragem
  listaPesquisa = listaDenuncias.filter((denuncia) => 
    denuncia.titulo.toLowerCase().includes(valorInput) ||
    denuncia.descricao.toLowerCase().includes(valorInput) ||
    denuncia.logradouro.toLowerCase().includes(valorInput) ||
    denuncia.estado.toLowerCase().includes(valorInput) ||
    denuncia.cidade.toLowerCase().includes(valorInput)
  );

  // Gera o HTML dinâmico com os resultados filtrados
  let htmlContent = listaPesquisa.map((item) => `
    <div class="resultado">
      <h3 class="resultado-titulo">${item.titulo}</h3>
      <p class="resultado-descricao">${item.descricao}</p>
      <div>
        <img src="../public/icons/ponto-mapa-icon-black.svg" alt="">
        <p class="resultado-endereco">${item.logradouro}, ${item.numero}</p>
      </div>
    </div>
  `).join("");

  // Atualiza o container com os novos resultados ou exibe uma mensagem se nenhum resultado for encontrado
  document.querySelector(".resultados-container").innerHTML = 
    htmlContent || `<p class="sem-resultados">Nenhuma denúncia encontrada.</p>`;
});

// CARREGAR DENÚNCIAS DA PESQUISA
