const baseUrl = "http://localhost:3000";

// SWITCH "TODAS" & "MINHAS" DENÚNCIAS
let todasSelecionadas = true;

document.addEventListener("DOMContentLoaded", () => carregarDenuncias())

document.getElementById("todas-denuncias-btn").onclick = async () => {
  console.log("clicou");
  document.getElementById("todas-denuncias-btn").style.backgroundColor =
    "#000000";
  document.getElementById("todas-denuncias-btn").style.color = "#FFFFFF";
  document.getElementById("minhas-denuncias-btn").style.backgroundColor =
    "#FFFFFF";
  document.getElementById("minhas-denuncias-btn").style.color = "#000000";
  todasSelecionadas = true;

  await carregarDenuncias()
};
document.getElementById("minhas-denuncias-btn").onclick = async () => {
  document.getElementById("minhas-denuncias-btn").style.backgroundColor =
    "#000000";
  document.getElementById("minhas-denuncias-btn").style.color = "#FFFFFF";
  document.getElementById("todas-denuncias-btn").style.backgroundColor =
    "#FFFFFF";
  document.getElementById("todas-denuncias-btn").style.color = "#000000";
  todasSelecionadas = false;

  await carregarDenuncias()
};

// CARREGAR DENÚNCIAS
async function carregarDenuncias() {
  let htmlContent = "";
  let denuncias;

  let todasDenuncias = await fetch(`${baseUrl}/denuncias`).then((data) =>
    data.json()
  );

  if (todasSelecionadas) {
    denuncias = todasDenuncias;
  } else {
    const usuario = localStorage.getItem("userSessionId");
    if (usuario !== null) {
      denuncias = todasDenuncias.filter(
        (denuncia) => denuncia.userId === usuario
      );
    } else {
      window.location.href = "auth.html"
    }
  }

  denuncias.forEach((item) => {
    htmlContent += `
      <div class="denuncia">
        <h3 class="denuncia-titulo">${item.titulo}</h3>
        <p class="denuncia-descricao">${item.descricao}</p>
        <div>
          <img src="../public/icons/ponto-mapa-icon-black.svg" alt="">
          <p class="denuncia-endereco">${item.cidade}</p>
        </div>
      </div>
    `;
  });

  document.querySelector(".denuncias-container").innerHTML = htmlContent;
}

