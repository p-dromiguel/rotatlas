document.addEventListener("DOMContentLoaded", () => {
  // === ÁREA DO USUÁRIO (login/logout) ===
  const userArea = document.getElementById("user-area");
  const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));

  if (usuarioLogado) {
    userArea.innerHTML = `
      <button class="login-btn" onclick="window.location.href='perfil.html'">Olá, ${usuarioLogado.nome}</button>
      <button class="explore-btn" onclick="logout()">Sair</button>
    `;
  } else {
    userArea.innerHTML = `
      <button class="login-btn" onclick="window.location.href='login.html'">Login</button>
      <button class="explore-btn" onclick="window.location.href='cadastrar.html'">Explore o Destino</button>
    `;
  }

  // === COMENTÁRIOS COM MODAL ===
  const lista = document.getElementById("comentarios-lista");
  const modal = document.getElementById("modal");
  const abrirModalBtn = document.getElementById("abrir-modal");
  const fecharModalBtn = document.getElementById("fechar-modal");
  const nomeInput = document.getElementById("nome");
  const cidadeInput = document.getElementById("cidade");
  const comentarioInput = document.getElementById("comentario");
  const enviarBtn = document.getElementById("enviar-comentario");

  if (lista && modal) {
    carregarComentarios();

    abrirModalBtn.addEventListener("click", () => {
  modal.classList.add("show");
});

fecharModalBtn.addEventListener("click", () => {
  modal.classList.remove("show");
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("show");
  }
});


    enviarBtn.addEventListener("click", () => {
      const nome = nomeInput.value.trim();
      const cidade = cidadeInput.value.trim();
      const texto = comentarioInput.value.trim();

      if (!nome || !cidade || !texto) {
        alert("Por favor, preencha todos os campos.");
        return;
      }

      const novoComentario = { nome, cidade, texto };
      const comentarios = JSON.parse(localStorage.getItem("comentariosAngra")) || [];
      comentarios.push(novoComentario);
      localStorage.setItem("comentariosAngra", JSON.stringify(comentarios));

      nomeInput.value = "";
      cidadeInput.value = "";
      comentarioInput.value = "";
      modal.style.display = "none";
      carregarComentarios();
    });
  }

  function carregarComentarios() {
    const comentarios = JSON.parse(localStorage.getItem("comentariosAngra")) || [];
    lista.innerHTML = "";

    comentarios.forEach(({ nome, cidade, texto }) => {
      const card = document.createElement("div");
      card.classList.add("comentario-card");

      card.innerHTML = `
        <p class="comentario">"${texto}"</p>
        <p class="autor">– ${nome} <span class="local">de ${cidade}</span></p>
      `;

      lista.appendChild(card);
    });
  }
});

function logout() {
  localStorage.removeItem("usuarioLogado");
  window.location.reload();
}