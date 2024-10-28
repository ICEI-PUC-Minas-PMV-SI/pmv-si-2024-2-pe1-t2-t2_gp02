// SWITCH ENTRAR/CADASTRAR
document.getElementById("entrar-switch").onclick = () => {
  switchEntrar();
  document.getElementById("entrar-form").style.display = "flex";
  document.getElementById("cadastrar-form").style.display = "none";
};
document.getElementById("cadastrar-switch").onclick = () => {
  switchCadastrar();
  document.getElementById("cadastrar-form").style.display = "flex";
  document.getElementById("entrar-form").style.display = "none";
};

function switchEntrar() {
  document.getElementById("entrar-switch").style.backgroundColor = "#000000";
  document.getElementById("entrar-switch").style.color = "#FFFFFF";
  document.getElementById("cadastrar-switch").style.backgroundColor = "#FFFFFF";
  document.getElementById("cadastrar-switch").style.color = "#000000";
}

function switchCadastrar() {
  document.getElementById("cadastrar-switch").style.backgroundColor = "#000000";
  document.getElementById("cadastrar-switch").style.color = "#FFFFFF";
  document.getElementById("entrar-switch").style.backgroundColor = "#FFFFFF";
  document.getElementById("entrar-switch").style.color = "#000000";
}

// SWITCH OLHO ABERTO/FECHADO SENHA - ENTRAR E CADASTRAR
document.getElementById("entrar-olho-fechado").onclick = () => {
  document.getElementById("entrar-olho-fechado").style.display = 'none';
  document.getElementById("entrar-olho-aberto").style.display = 'block';
  document.getElementById("entrar-senha").type = 'text';
}
document.getElementById("entrar-olho-aberto").onclick = () => {
  document.getElementById("entrar-olho-aberto").style.display = 'none';
  document.getElementById("entrar-olho-fechado").style.display = 'block';
  document.getElementById("entrar-senha").type = 'password';
}

document.getElementById("cadastrar-olho-fechado").onclick = () => {
  document.getElementById("cadastrar-olho-fechado").style.display = 'none';
  document.getElementById("cadastrar-olho-aberto").style.display = 'block';
  document.getElementById("cadastrar-senha").type = 'text';
}
document.getElementById("cadastrar-olho-aberto").onclick = () => {
  document.getElementById("cadastrar-olho-aberto").style.display = 'none';
  document.getElementById("cadastrar-olho-fechado").style.display = 'block';
  document.getElementById("cadastrar-senha").type = 'password';
}

// ENTRAR
document.getElementById("entrar-btn").onclick = () => {
  const mail = document.getElementById("entrar-email").value;
  const senha = document.getElementById("entrar-senha").value;

  console.log({
    mail,
    senha,
  });
};

// CADASTRAR
document.getElementById("cadastrar-btn").onclick = () => {
  const id = Date.now().toString(36) + Math.random().toString(36).substring(2);

  const nome = document.getElementById("cadastrar-nome").value;
  const mail = document.getElementById("cadastrar-email").value;
  const senha = document.getElementById("cadastrar-senha").value;

  console.log({
    id,
    nome,
    mail,
    senha,
  });
};
