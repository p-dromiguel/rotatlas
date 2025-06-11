// Lista de destinos e links
const destinations = [
  { name: "Angra dos Reis", url: "angra.html" },
  { name: "Rio de Janeiro", url: "riodejaneiro.html" },
  { name: "Miami", url: "construção.html" },
  { name: "Jericoacoara", url: "jericoacoara.html" },
  { name: "Barcelona", url: "construção.html" },
  { name: "Porto de Galinhas", url: "portodegalinhas.html" },
  { name: "Paris", url: "construção.html" },
  { name: "Londres", url: "construção.html" },
  { name: "Tóquio", url: "construção.html" },
  { name: "Nova York", url: "construção.html" },
  { name: "Sydney", url: "construção.html" },
  { name: "Cidade do Cabo", url: "construção.html" }
];

// Função para mostrar sugestões
function showSuggestions(query) {
  const suggestionsList = document.getElementById("suggestions-list");
  const message = document.getElementById("no-destination-message");
  suggestionsList.innerHTML = ""; // Limpar sugestões anteriores
  message.style.display = "none"; // Esconder a mensagem ao digitar novamente

  if (query === "") return;

  // Mostrar mensagem de carregamento
  message.textContent = "Estamos acumulando informações...";
  message.classList.add("loading");
  message.style.display = "block";

  const filtered = destinations.filter(dest =>
    dest.name.toLowerCase().includes(query.toLowerCase())
  );

  if (filtered.length > 0) {
    // Limpar mensagem de carregamento
    message.style.display = "none";
    message.classList.remove("loading");

    filtered.forEach(dest => {
      const item = document.createElement("li");
      item.textContent = dest.name;
      item.onclick = () => {
        // Preencher o campo de pesquisa com o destino selecionado
        document.getElementById("search-bar").value = dest.name;
        suggestionsList.innerHTML = ""; // Limpar sugestões
        message.style.display = "none"; // Esconder a mensagem
      };
      suggestionsList.appendChild(item);
    });
  } else {
    // Exibir mensagem de "Destino não encontrado"
    message.textContent = "Destino não encontrado. Estamos acumulando mais informações sobre ele...";
    message.classList.remove("loading");
    message.style.display = "block";
  }
}

// Função de busca ao clicar na lupa
function goToDestination() {
  const query = document.getElementById("search-bar").value.trim();
  const destination = destinations.find(dest =>
    dest.name.toLowerCase() === query.toLowerCase()
  );

  const message = document.getElementById("no-destination-message");

  if (destination) {
    // Se o destino for encontrado, redireciona
    window.location.href = destination.url;
  } else {
    // Se o destino não for encontrado, exibe a mensagem
    message.textContent = "Destino não encontrado. Estamos acumulando mais informações sobre ele...";
    message.classList.remove("loading");
    message.style.display = "block";
    // Impede o redirecionamento
    event.preventDefault(); // Evita o redirecionamento se o destino não for encontrado
  }
}