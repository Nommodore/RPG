//const text = document.querySelector('.quotec');

// frases
const quote = [
  "“Todo mundo que busca <span>poder</span>, sem exceção, busca a batalha. Você <span>luta</span> para se tornar mais <span>poderoso?</span> Ou você quer mais <span>poder para lutar?</span>” </br> <p>Kenpachi - 5° Exército Real Adrynniano</p>",
  "“Nossas ações não precisam ser lembradas, <span>pois nunca serão esquecidas.</span>” </br> <p>Wynnstan Seraharte - 3° Brigada Real de Suporte",
  "“<span>Tolo!</span> Você realmente acredita que vamos ganhar uma guerra sendo <span>justos?!</span>” </br> <p> ???",
  "“O Momento em que você fecha os olhos no campo de batalha é o momento em que você <span>nunca mais os abre.</span>” </br> <p>Maverick Phantomhive - Divisão de Reconhecimento",
  "“Quando a justiça se curva, ela <span>quebra.</span>” </br> <p>Elizabeth Windsor - 3° Batalhão de Infantaria Móvel",
  "“Os que são <span>loucos</span> de verdade para acreditar que podem mudar o mundo, são aqueles que de fato, o mudam!” </br> <p> Tengen - ???",
  "“Há o <span>certo</span> e o <span>errado</span>, todo o resto é mera <span>racionalização.</span>” </br> <p>Elizabeth Windsor - 3° Batalhão de Infantaria Móvel",
  "“Vivemos num eterno ciclo mortal, a crueldade gera sofrimento e o sofrimento leva a crueldade. Devemos lutar contra isso.” </br> <p>Elizabeth Windsor - 3° Batalhão de Infantaria Móvel",
  "“Vida e razão andam juntas, aqueles que não possuem um motivo, <span>não possuem uma vida.</span>” </br> <p>Mikael Pritchard - 3° Batalhão de Infantaria Móvel",
  "<span>Não perderemos nesse fronte,</span> a luz nos guiará triunfante e vividamente a vitória!” </br> <p>Russel Howk - 3° Batalhão de Infantaria Móvel",
  "A Vida é como um cadáver. Retrocede e apodrece com o tempo, não é capaz de saber o quão mal faz a si mesmo.” </br> <p>Frida - 3° Batalhão de Infantaria Móvel",
  "Você permanece cega, pelas sombras de sua própria luz.” </br> <p>Vivian - 3° Batalhão de Infantaria Móvel"





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

