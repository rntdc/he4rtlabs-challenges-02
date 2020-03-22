// Este será o objeto principal no qual você irá se basear para as funções do desafio!
// Caso haja dúvidas de como prosseguir, favor consultar a sala #js no nosso discord!
const sr = ScrollReveal();
sr.reveal('.card');


let features = [
  {
    feature: "Authentication",
    devHours: 10,
    testHours: 2
  }
];


function addDiv(){
  div = document.getElementById("addDiv");
  footer = document.getElementById("footer")
  if (div.style.display == 'flex') {
    div.style.display = 'none';
    footer.style.position = 'absolute';
  } else {
    div.style.display = 'flex';
    footer.style.position = 'relative';
  }
}

//alert("He4rtDevs <3");

// Dica: faça o layout e depois pense em como vai funcionar o script.
