//const text = document.querySelector('.quotec');

// frases
const quote = [
  "“Todo mundo que busca <span>poder</span>, sem exceção, busca a batalha. Você <span>luta</span> para se tornar mais <span>poderoso?</span> Ou você quer mais <span>poder para lutar?</span>” </br> <p>Kenpachi - 5° Exército Real Adrynniano</p>",
  "“Nossas <span>ações</span> não precisam ser lembradas, <span>pois nunca serão esquecidas.</span>” </br> <p>Wynnstan Seraharte - 3° Brigada Real de Suporte",
  "“<span>Tolo!</span> Você realmente acredita que vamos ganhar uma <span>guerra</span> sendo <span>justos?!</span>” </br> <p> ???",
  "“O Momento em que você <span>fecha os olhos no campo de batalha</span> é o momento em que você <span>nunca mais os abre.</span>” </br> <p>Maverick Phantomhive - Divisão de Reconhecimento",
  "“Quando a <span>justiça</span> se curva, ela <span>quebra.</span>” </br> <p>Elizabeth Windsor - 3° Batalhão de Infantaria Móvel",
  "“Os que são <span>loucos</span> de verdade para acreditar que podem <span>mudar o mundo</span>, são aqueles que de fato, <span>o mudam!</span>” </br> <p> Tengen - ???",
  "“Há o <span>certo</span> e o <span>errado</span>, todo o resto é mera <span>racionalização.</span>” </br> <p>Elizabeth Windsor - 3° Batalhão de Infantaria Móvel",
  "“Vivemos num <span>eterno</span> ciclo mortal, a crueldade gera <span>sofrimento</span> e o sofrimento leva a <span>crueldade.</span> Devemos <span>acabar</span> com isso.” </br> <p>Elizabeth Windsor - 3° Batalhão de Infantaria Móvel",
  "“<span>Vida</span> e <span>razão</span> andam juntas, aqueles que não possuem um motivo, <span>não possuem uma vida.</span>” </br> <p>Mikael Pritchard - 3° Batalhão de Infantaria Móvel",
  "“Não <span>perderemos</span> nesse fronte, a luz nos guiará <span>triunfante</span> e <span>vividamente</span> a vitória!” </br> <p>Russel Howk - 3° Batalhão de Infantaria Móvel",
  "“A Vida é como um <span>cadáver.</span> Retrocede e <span>apodrece</span> com o tempo, não é capaz de saber o quão <span>mal</span> faz a si mesmo.” </br> <p>Frida - 3° Batalhão de Infantaria Móvel",
  "“Você permanece <span>cega</span>, pelas sombras de sua <span>própria luz.</span>” </br> <p>Vivian - 3° Batalhão de Infantaria Móvel",
  "“Os <span>fortes</span> lutam <span>sozinhos</span>, os <span>mais</span> fortes <span>protegem</span> os seus.” </br> <p>Tai de Aura - 5° Exército Real Adrynniano",
  "“<span>Ordem</span> e <span>disciplina</span> andam lado a lado, aqueles que não os <span>mantêm</span>, permanecem na <span>idiotice.</span>” </br> <p>Elizabeth Windsor - 3° Batalhão de Infantaria Móvel",
  "“Guerrear não é <span>reinvindicar</span> e conquistar, é <span>tomar de volta</span> aquilo que era <span>seu</span> por <span>direito.</span>” </br> <p>Howard - 3° Batalhão de Infantaria Móvel"









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

