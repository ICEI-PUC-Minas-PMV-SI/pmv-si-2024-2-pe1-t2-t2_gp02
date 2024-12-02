const urlBase = "http://localhost:3000";

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
  document.getElementById("entrar-olho-fechado").style.display = "none";
  document.getElementById("entrar-olho-aberto").style.display = "block";
  document.getElementById("entrar-senha").type = "text";
};
document.getElementById("entrar-olho-aberto").onclick = () => {
  document.getElementById("entrar-olho-aberto").style.display = "none";
  document.getElementById("entrar-olho-fechado").style.display = "block";
  document.getElementById("entrar-senha").type = "password";
};

document.getElementById("cadastrar-olho-fechado").onclick = () => {
  document.getElementById("cadastrar-olho-fechado").style.display = "none";
  document.getElementById("cadastrar-olho-aberto").style.display = "block";
  document.getElementById("cadastrar-senha").type = "text";
};
document.getElementById("cadastrar-olho-aberto").onclick = () => {
  document.getElementById("cadastrar-olho-aberto").style.display = "none";
  document.getElementById("cadastrar-olho-fechado").style.display = "block";
  document.getElementById("cadastrar-senha").type = "password";
};

// ENTRAR
document.getElementById("entrar-btn").onclick = async () => {
  const email = document.getElementById("entrar-email").value;
  const senha = document.getElementById("entrar-senha").value;

  if (email.length === 0) {
    document.getElementById("entrar-email-msg").style.display = "block";
    return;
  }
  if (senha.length === 0) {
    document.getElementById("entrar-senha-msg").style.display = "block";
    return;
  }

  const usuarios = await fetch(`${urlBase}/usuarios`).then((data) =>
    data.json()
  );
  let usuarioEncontrado = [];

  for (let usuario of usuarios) {
    if (usuario.email === email) usuarioEncontrado.push(usuario);
  }

  if (usuarioEncontrado.length === 0) {
    document.getElementById("entrar-msg-dinamica").style.display = "block";
    document.getElementById("entrar-msg-dinamica").innerText =
      "Este e-mail não está cadastrado";
    return;
  }

  const usuarioLogado = usuarioEncontrado[0];

  if (usuarioLogado.senha !== senha) {
    document.getElementById("entrar-msg-dinamica").style.display = "block";
    document.getElementById("entrar-msg-dinamica").innerText =
      "Senha incorreta";
    return;
  }

  localStorage.setItem("userSessionId", usuarioLogado.id);
  localStorage.setItem("nome", usuarioLogado.nome);
  window.location.href = "index.html"
};

// CADASTRAR
document.getElementById("cadastrar-btn").onclick = async (event) => {
  event.preventDefault();

  const id = Date.now().toString(36) + Math.random().toString(36).substring(2);

  const nome = document.getElementById("cadastrar-nome").value;
  const email = document.getElementById("cadastrar-email").value;
  const senha = document.getElementById("cadastrar-senha").value;

  if (nome.length === 0) {
    document.getElementById("cadastrar-nome-msg").style.display = "block";
    return;
  }
  if (email.length === 0) {
    document.getElementById("cadastrar-email-msg").style.display = "block";
    return;
  }
  if (senha.length === 0) {
    document.getElementById("cadastrar-senha-msg").style.display = "block";
    return;
  }

  const usuarios = await fetch(`${urlBase}/usuarios`).then((data) =>
    data.json()
  );

  for (let usuario of usuarios) {
    if (usuario.email === email) {
      document.getElementById("cadastrar-msg-dinamica").style.display = "block";
      document.getElementById("cadastrar-msg-dinamica").innerText =
        "Este e-mail já está cadastrado";
      return;
    }
  }

  const response = await fetch(`${urlBase}/usuarios`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: id,
      nome: nome,
      email: email,
      senha: senha,
    }),
  });

  if (!response.ok) throw new Error("Ocorreu um erro ao cadastrar o usuário.");

  window.location.href = "index.html";
};
