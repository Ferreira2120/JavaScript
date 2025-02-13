//declarando função
function ola() {
  document.write("Ola, mundo<br>");
}

ola();

//expressão de função
const ola2 = function () {
  console.log("Ola, mundo de function");
};
ola2();

//arrow functions
const ola3 = () => {
  console.log("Ola, mundo de arrow function");
};
ola3();

//retorno de valores
function obtemDiaSemana() {
  return new Date().getDay();
}

console.log(obtemDiaSemana());

//recebendo valores

function receber(n1, n2) {
  return n1 + n2;
}

let soma = receber(5, 3);
console.log(soma);
