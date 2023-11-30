





// frases
const quote = [
  "“Todo mundo que busca poder, sem exceção, busca a batalha. <span>Você luta para se tornar mais poderoso? Ou você quer mais poder para lutar?</span>” </br> <p>Kenpachi - 5° Exército Real Adrynniano</p>",
  "“<span>Nossas ações</span> não precisam ser lembradas, pois <span>nunca serão esquecidas.</span>” </br> <p>Wynnstan Seraharte - 3° Brigada Real de Suporte",
  "“O Momento em que você <span>fecha os olhos no campo de batalha</span> é o momento em que <span>você nunca mais os abre.</span>” </br> <p>Maverick Phantomhive - Divisão de Reconhecimento",
  "“Quando <span>a justiça se curva,</span> <span>ela quebra.</span>” </br> <p>Elizabeth Windsor - 3° Batalhão de Infantaria Móvel",
  "“<span>Os que são loucos de verdade</span> para acreditar que <span>podem mudar o mundo</span>, são aqueles que de fato, o mudam!” </br> <p> Tengen - ???",
  "“Há <span>o certo e o errado</span>, todo o resto <span>é mera racionalização.</span>” </br> <p>Elizabeth Windsor - 3° Batalhão de Infantaria Móvel",
  "“Vivemos num eterno ciclo mortal, a crueldade gera sofrimento e o sofrimento leva a crueldade. <span>Devemos acabar com isso.</span>” </br> <p>Elizabeth Windsor - 3° Batalhão de Infantaria Móvel",
  "“<span>Ordem e disciplina andam lado a lado</span>, aqueles que não os mantêm, permanecem na idiotice.” </br> <p>Elizabeth Windsor - 3° Batalhão de Infantaria Móvel",
  "“Eu sou o osso da minha espada. Aço é meu corpo e fogo é meu sangue. No entanto, <span>essas mãos nunca devem segurar nada enquanto eu oro.</span>” </br> <p>Kyre - ???"

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

function deleteIntro() {
  const text = document.getElementById('intronbutton');

  text.style.animation = 'glowintro 5s';
  text.style.animationFillMode = 'fowards';
  text.style.s
  
  setTimeout(() => {
    const text = document.getElementById('intronbutton');
  
    
    text.style.display = 'none';
  
  }, 5000); // millisegundos

  const camp = document.getElementById('campanhas');
  
  setTimeout(() => {
    camp.style.display = 'block';
  }, 8000);


}

// deletar frase após 7 segundos
/* setTimeout(() => {
  const text = document.getElementById('quotec');

  
  text.style.display = 'none';

}, 7000); // millisegundos
*/


/* setTimeout(() => {
  camp.style.display = 'block';

}, 8000); // millisegundos

function pageLoaded() {
  var audio = document.getElementById("audio");
  audio.play();
}
*/