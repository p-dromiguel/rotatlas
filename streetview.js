const destinos = [
  { nome: "Torre Eiffel, Paris", lat: 48.8584, lng: 2.2945 },
  { nome: "Estátua da Liberdade, Nova York", lat: 40.6892, lng: -74.0445 },
  { nome: "Big Ben, Londres", lat: 51.5007, lng: -0.1246 },
  { nome: "Coliseu, Roma", lat: 41.8902, lng: 12.4922 },
  { nome: "Cristo Redentor, Rio de Janeiro", lat: -22.9519, lng: -43.2105 },
  { nome: "Ópera de Sydney", lat: -33.8568, lng: 151.2153 },
  { nome: "Muralha da China", lat: 40.4319, lng: 116.5704 },
  { nome: "Taj Mahal, Índia", lat: 27.1751, lng: 78.0421 },
  { nome: "Machu Picchu, Peru", lat: -13.1631, lng: -72.5450 },
  { nome: "Pirâmides de Gizé, Egito", lat: 29.9792, lng: 31.1342 },
  { nome: "Monte Fuji, Japão", lat: 35.3606, lng: 138.7274 },
  { nome: "Niagara Falls, Canadá/EUA", lat: 43.0962, lng: -79.0377 }
];


let ultimoDestino = null;

function surpreendaMe() {
  let destino;

  // Continua sorteando até que seja diferente do anterior
  do {
    destino = destinos[Math.floor(Math.random() * destinos.length)];
  } while (destino === ultimoDestino && destinos.length > 1);

  ultimoDestino = destino;

  document.getElementById('nome-destino').textContent = `Você foi para ${destino.nome}`;
  document.getElementById('texto-gerado').textContent = `Aproveite a vista em ${destino.nome}!`;

  const streetViewURL = `https://www.google.com/maps/embed?pb=!4v${Math.floor(Math.random() * 100000)}!6m8!1m7!1sCAoSLEFGMVFpcFBTR0lyRzJTT3lMZlNXT0tFZzZibG5ZcGZIQ0VldVNheE5VTU13!2m2!1d${destino.lat}!2d${destino.lng}!3f0!4f0!5f1.1924812503605782`;

  document.getElementById("streetview-container").innerHTML = `
    <iframe
      width="100%"
      height="400"
      style="border:0"
      loading="lazy"
      allowfullscreen
      referrerpolicy="no-referrer-when-downgrade"
      src="${streetViewURL}">
    </iframe>
  `;
}

