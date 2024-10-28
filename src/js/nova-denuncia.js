document.getElementById("nova-denuncia-btn").onclick = async () => {
  const id = Date.now().toString(36) + Math.random().toString(36).substring(2);
  const titulo = document.getElementById("nova-denuncia-titulo").value;
  const descricao = document.getElementById("nova-denuncia-descricao").value;
  const foto = document.getElementById("nova-denuncia-foto").value;
  const localizacao = await getCurrentLocation();

  console.log({
    id,
    titulo,
    descricao,
    foto,
    localizacao,
  });
};

async function getCurrentLocation() {
  return localInfo;
}

let localInfo;
document
  .getElementById("localizacao-atual-btn")
  .addEventListener("click", () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((data) => (localInfo = data));
    } else console.log("Deu errado");
  });

document
  .getElementById("nova-denuncia-foto")
  .addEventListener("change", function (event) {
    const file = event.target.files[0]; // Captura o arquivo que o usuário selecionou

    if (file) {
      const reader = new FileReader();

      reader.onload = function (e) {
        // Exibe a imagem escolhida em um elemento <img>
        document.getElementById("preview-foto-local").src = e.target.result;
      };

      reader.readAsDataURL(file); // Converte o arquivo em uma URL que o navegador pode exibir
    }
  });
