const usuarios = [
    { id: 1, nome: "João Da Silva", email: "joaoSilv@gmail.com", senha: "12345678" },
    { id: 2, nome: "Maria Souza", email: "maria@gmail.com", senha: "senha123" }
];

function validateForm() {
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("password").value.trim();
    const errorMessage = document.getElementById("error-message");

    const usuario = usuarios.find(u => u.email === email && u.senha === senha);

    if (usuario) {
        localStorage.setItem("usuarioLogado", JSON.stringify(usuario));
        window.location.href = "index.html";
        return false;
    } else {
        errorMessage.textContent = "Email ou senha inválidos.";
        errorMessage.style.display = "block";
        return false;
    }
}

const modal = document.getElementById("forgot-password-modal");
const forgotLink = document.querySelector(".remember-forgot a");
const closeModal = document.querySelector(".close");

forgotLink.addEventListener("click", (e) => {
    e.preventDefault();
    modal.style.display = "block";
});

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});

document.getElementById("forgotPasswordForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("resetEmail").value;
    
    if (validateEmail(email)) {
        alert("Link de redefinição enviado para: " + email);
        modal.style.display = "none";
    } else {
        alert("Por favor, insira um e-mail válido.");
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}