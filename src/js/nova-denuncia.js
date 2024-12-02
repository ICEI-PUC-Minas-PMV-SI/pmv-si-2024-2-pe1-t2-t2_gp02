const baseURL = "http://localhost:3000";
const mapboxAccessToken =
  "pk.eyJ1IjoibGFyaXNzYW9saXZlaXJheiIsImEiOiJjbTN4cjdyNWcwN2puMm5wdnJwMmE1MGc3In0.V5pDz0YyrWpHvJW4krf32Q";
let longitude;
let latitude;

const textoBtn = document.getElementById("nova-denuncia-btn");
const loadingBtn = document.querySelector(
  ".nova-denuncia-btn-loading-container"
);

// CRIAR NOVA DENÚNCIA
document.getElementById("nova-denuncia-btn").onclick = async (event) => {
  event.preventDefault();

  mostrarLoadingBtn();

  const id = Date.now().toString(36) + Math.random().toString(36).substring(2);
  const titulo = document.getElementById("nova-denuncia-titulo").value;
  const descricao = document.getElementById("nova-denuncia-descricao").value;
  const localizacao = await getCurrentLocation(longitude, latitude);
  let userId;

  if (titulo.length === 0) {
    document.getElementById("nova-denuncia-titulo-erro").style.display = "flex";
    mostrarTextoBtn();
    return;
  }
  if (descricao.length === 0) {
    document.getElementById("nova-denuncia-descricao-erro").style.display =
      "flex";
    mostrarTextoBtn();
    return;
  }
  if (localizacao.logradouro.length === 0) {
    document.getElementById("nova-denuncia-localizacao-erro").style.display =
      "flex";
    mostrarTextoBtn();
    return;
  }

  const usuario = localStorage.getItem("userSessionId");
  if (usuario) {
    userId = usuario;
  } else {
    document.getElementById("msg-erro-dinamica").style.display = "block";
    document.getElementById("msg-erro-dinamica").innerText =
      "Você precisa entrar na sua conta para fazer uma denúncia";
    mostrarTextoBtn();
    return;
  }

  console.log(localizacao);

  const response = await fetch(`${baseURL}/denuncias`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: id,
      titulo: titulo,
      descricao: descricao,
      logradouro: localizacao.logradouro,
      numero: localizacao.numero,
      cidade: localizacao.cidade,
      estado: localizacao.estado,
      imagem: "",
      userId: userId,
    }),
  });

  if (!response.ok) {
    mostrarTextoBtn();
    throw new Error("Não foi possível cadastrar uma nova denúncia.");
  }

  window.location.href = "../html/denuncia-feita.html";
};

document
  .getElementById("localizacao-atual-btn")
  .addEventListener("click", () => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoibGFyaXNzYW9saXZlaXJheiIsImEiOiJjbTN4cjdyNWcwN2puMm5wdnJwMmE1MGc3In0.V5pDz0YyrWpHvJW4krf32Q";
    const mapa = new mapboxgl.Map({
      container: "mapa-nova-denuncia",
      style: "mapbox://styles/mapbox/outdoors-v12",
      center: [-46.633308, -23.55052],
      zoom: 16,
      interactive: true,
    });
    // mapa.addControl(new mapboxgl.NavigationControl());

    // Pede permissão para acessar a localização atual do usuário
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          const userCoordinates = [coords.longitude, coords.latitude];

          longitude = coords.longitude;
          latitude = coords.latitude;

          mapa.setCenter(userCoordinates);

          new mapboxgl.Marker()
            .setLngLat(userCoordinates)
            .setPopup(
              new mapboxgl.Popup().setHTML("<h4>Você está aqui!</h4>") // Popup opcional
            )
            .addTo(mapa);
        },
        (error) => {
          console.error("Erro ao obter localização:", error.message);
        },
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0,
        }
      );
    } else {
      console.error("Geolocalização não é suportada pelo navegador.");
    }

    document.getElementById("mapa-nova-denuncia").style.display = "flex";
  });

// PEGAR LOCALIZAÇÃO ATUAL DO USUÁRIO
async function getCurrentLocation(lon, lat) {
  const reqURL = `https://api.mapbox.com/search/geocode/v6/reverse?longitude=${lon}&latitude=${lat}&access_token=${mapboxAccessToken}`;

  const response = await fetch(reqURL);
  const data = await response.json();

  console.log(data);

  if (data.features && data.features.length > 0) {
    // O primeiro resultado geralmente é o mais relevante
    const resp = data.features[0].properties.context;
    const logradouro = resp.address.street_name;
    const numero = resp.address.address_number;
    const estado = resp.region.name;
    const cidade = resp.place.name;
    return { logradouro, cidade, estado, numero };
  }

  document.getElementById("nova-denuncia-localizacao-erro").style.display =
    "flex";
  mostrarTextoBtn();
  throw new Error("Não foi possível obter os detalhes do endereço.");
}

// RENDERIZAR FOTO DO LOCAL DA DENÚNCIA
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

function mostrarLoadingBtn() {
  textoBtn.style.display = "none";
  loadingBtn.style.display = "flex";
}

function mostrarTextoBtn() {
  textoBtn.style.display = "flex";
  loadingBtn.style.display = "none";
}
