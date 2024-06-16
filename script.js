// frases
const quote = [
  "<span id='textver'>Não há</span> arrependimentos. Se alguém pode orgulhar-se da sua vida, não deve desejar <span id='textver'>outra oportunidade.</span>” </br> <p>Evangeline Mordred - 2° Exército de Choque “Last Apocrypha”</p>",
  "“Há <span id='textver'>o certo e o errado</span>. Todo o resto <span id='textver'>é mera racionalização.</span>” </br> <p>Elizabeth Windsor - 3° Batalhão de Infantaria Móvel",
  "<span id='textver'>“Quem quiser praticar sempre a bondade em tudo o que faz, está fadado a sofrer, entre tantos que não são bons.” </br> <p>[REMOVIDO] - [REMOVIDO]</span id='textver>'",
  "“<span id='textver'>Ordem e disciplina</span> andam lado a lado. Aqueles que não <span>os mantêm</span>, permanecem <span>na idiotice.</span>” </br> <p>Elizabeth Windsor - 3° Batalhão de Infantaria Móvel",
  "“Todas as vidam importam. Independente se as vidas que estão em minhas mão são inimigas ou amigas.” </br> <p>Dr. Fritz Fitzgerald - Médico Voluntário Adrynniano"

];

// 11 batalhão de reconhecimento móvel
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
  var audiointro = document.getElementById('audiointro');
  var audio = document.getElementById("audio");
  var buttonintro = document.getElementById('buttonin');

  buttonintro.style.display = 'none';
  

  audiointro.play();
  audio.play();

  text.style.animation = 'glowintro 8s';
  text.style.animationFillMode = 'fowards';
  
  setTimeout(() => {
    const text = document.getElementById('intronbutton');
  
    
    text.style.display = 'none';
  
  }, 8000); // millisegundos

  const camp = document.getElementById('campanhas');
  
  
  setTimeout(() => {
    
    camp.style.display = 'block';
    
  }, 10000);
  
}
