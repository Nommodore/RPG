//const text = document.querySelector('.quotec');

// frases
const quote = [
  "“Todo mundo que busca poder, sem exceção, busca a batalha. Você luta para se tornar mais poderoso? Ou você quer mais poder para lutar?” </br> <p>Kenpachi - 5° Exército Real Adrynniano</p>",
  "“Nossas ações não precisam ser lembradas, pois nunca serão esquecidas.” </br> <p>Wynnstan Seraharte - 3° Brigada Real de Suporte",
  "“Tolo! Você realmente acredita que vamos ganhar uma guerra sendo justos?!” </br> <p> ???",
  "“O Momento em que você fecha os olhos no campo de batalha é o momento em que você nunca mais os abre.” </br> <p>Maverick Phantomhive - Divisão de Reconhecimento"
];

// escolher frase aleatória
function randomquote() {
  const randomIndexquote = Math.floor(Math.random() * quote.length)
  return quote[randomIndexquote];
}

// trocar frase
function changequote() {
  var text = document.getElementById("quotec");
  text.innerHTML = (randomquote(quote));

  
}

// ativar função
changequote();

// deletar frase após 7 segundos
setTimeout(() => {
  const text = document.getElementById('quotec');

  
  text.style.display = 'none';

}, 7000); // millisegundos

