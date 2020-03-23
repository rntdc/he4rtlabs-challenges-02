// Este será o objeto principal no qual você irá se basear para as funções do desafio!
// Caso haja dúvidas de como prosseguir, favor consultar a sala #js no nosso discord!
const sr = ScrollReveal();
sr.reveal('.card');

let func = 0;
let totalAmount = 0

// Calcula valor total
const calcFeature = (devHours, testHours) => {
  let valorHora = document.getElementById("valorHora").value;
  let valorFeature = Math.floor((devHours + testHours) * valorHora);
  return valorFeature;
}

// Atribui classe para tr selecionado
const selecionar = event => {
  let trs = document.getElementsByTagName("tr");
  for(let tr of trs){
    tr.className = "";
  }

  event.target.parentNode.classList.add("table-active");
}

// Gera partes da tabela
const geraTabela = (id, data) => {
  func++;
  return `
    <tr onclick="selecionar(event)" data-index="${id}">
      <td>${data.feature}</td>
      <td>${data.devHours}h</td>
      <td>${data.testHours}h</td>
      <td>R$ ${calcFeature(data.devHours, data.testHours)}</td>
    </tr>
  `;
}


let features = [
  {
    feature: "Authentication",
    devHours: 10,
    testHours: 2
  }
];


// Atualiza
const att = () => {
  totalAmount = 0;
  func = 0;
  let table = document.getElementById("bodyTable");
  table.innerHTML = "";
  features.forEach((feature, i) => {
    let tr = geraTabela(i, feature);
    table.insertAdjacentHTML("beforeend", tr);
  });

  document.getElementById("func").innerHTML = func;

  document.getElementById("totalDev").innerHTML = features.reduce(
    (acc, feature) => (acc += feature.devHours),
    0
  );
  document.getElementById("totalTest").innerHTML = features.reduce(
    (acc, feature) => (acc += feature.testHours),
    0
  );
  document.getElementById("total").innerHTML = features.reduce(
    (acc, feature) =>
      (acc += calcFeature(feature.devHours, feature.testHours)),
    0
  );
};

const init = () => att();
init();

document.getElementById("valorHora").addEventListener("keyup", () => {
  att();
});

// Adiciona valores do form na tabela
document.getElementById("btnAdd").addEventListener("click", e => {
  e.preventDefault();

  let inputFeature = document.getElementById("addName");
  let inputDev = document.getElementById("addDev");
  let inputTest = document.getElementById("addTest");
  let feature = {
    feature: inputFeature.value,
    devHours: parseInt(inputDev.value),
    testHours: parseInt(inputTest.value)
  };
  document.getElementById("addForm").reset();

  features.push(feature);
  att();
});



// Exibição da div de form e solucao footer
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
