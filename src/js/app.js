// MENU POPUP - ABRIR/FECHAR
let menuAberto = false;
document.getElementById("abrir-menu").addEventListener('click', () => {
  if (menuAberto) fecharMenu()
  else abrirMenu()
})
document.getElementById("fechar-menu").onclick = () => {
  fecharMenu()
}

function abrirMenu() {
  fecharPerfil()
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
  if (perfilAberto) fecharPerfil()
  else abrirPerfil()
}
document.getElementById("fechar-perfil").onclick = () => {
  fecharPerfil()
}

function abrirPerfil() {
  fecharMenu()
  document.querySelector(".perfil-container").style.display = "block";
  perfilAberto = true;
}
function fecharPerfil() {
  document.querySelector(".perfil-container").style.display = "none";
  perfilAberto = false;
}

