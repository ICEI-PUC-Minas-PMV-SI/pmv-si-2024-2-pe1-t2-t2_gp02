// CARREGAR MAPA ASSIM QUE O USUÁRIO ENTRAR NO SITE
document.addEventListener("DOMContentLoaded", () => {
  mapboxgl.accessToken =
    "pk.eyJ1IjoibGFyaXNzYW9saXZlaXJheiIsImEiOiJjbTN4cjdyNWcwN2puMm5wdnJwMmE1MGc3In0.V5pDz0YyrWpHvJW4krf32Q";
  const mapa = new mapboxgl.Map({
    container: "mapa", // ID do contêiner no HTML
    style: "mapbox://styles/mapbox/streets-v12", // Estilo do mapa
    center: [-46.633308, -23.55052], // Coordenadas padrão (São Paulo)
    zoom: 13, // Nível de zoom inicial
  });
  mapa.addControl(new mapboxgl.NavigationControl());

  // Pede permissão para acessar a localização atual do usuário
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        const userCoordinates = [coords.longitude, coords.latitude];

        // Centraliza o mapa na localização do usuário
        mapa.setCenter(userCoordinates);

        // Adiciona um marcador na localização do usuário
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
        enableHighAccuracy: true, // Solicita alta precisão
        timeout: 5000, // Tempo limite
        maximumAge: 0, // Não usa localização em cache
      }
    );
  } else {
    console.error("Geolocalização não é suportada pelo navegador.");
  }
});

// MENU POPUP - ABRIR/FECHAR
let menuAberto = false;
document.getElementById("abrir-menu").addEventListener("click", () => {
  if (menuAberto) fecharMenu();
  else abrirMenu();
});
document.getElementById("fechar-menu").onclick = () => {
  fecharMenu();
};

function abrirMenu() {
  fecharPerfil();
  document.querySelector(".menu-container").style.display = "block";
  menuAberto = true;
}
function fecharMenu() {
  document.querySelector(".menu-container").style.display = "none";
  menuAberto = false;
}

// PERFIL POPUP - ABRIR/FECHAR
let perfilAberto = false;
document.getElementById("abrir-perfil").onclick = () => {
  if (perfilAberto) fecharPerfil();
  else abrirPerfil();
};
document.getElementById("fechar-perfil").onclick = () => {
  fecharPerfil();
};

function abrirPerfil() {
  fecharMenu();

  const usuarioLogadoId = localStorage.getItem("userSessionId");
  const usuarioLogadoNome = localStorage.getItem("nome");
  if (usuarioLogadoId === null) {
    document.getElementById("sair-btn").style.display = "none";
  } else {
    document.getElementById("entrar-btn").style.display = "none";
    document.getElementById(
      "perfil-titulo"
    ).innerText = `Olá, ${usuarioLogadoNome}`;
  }

  document.querySelector(".perfil-container").style.display = "block";
  perfilAberto = true;
}
function fecharPerfil() {
  document.querySelector(".perfil-container").style.display = "none";
  perfilAberto = false;
}

// SAIR DA CONTA
document.getElementById("sair-btn").onclick = (event) => {
  event.preventDefault();

  localStorage.removeItem("nome");
  localStorage.removeItem("userSessionId");

  window.location.href = "sair.html";
};
