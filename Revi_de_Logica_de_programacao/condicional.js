let idade = 20;
let paisPresentes = false;
let comprouBilhete = false;
const podeViajar = idade >= 18 || (paisPresentes && comprouBilhete);

console.log("O passageiro pode viajar:" + podeViajar);

if (idade >= 18) {
  console.log("O passageiro é maior de idade");
} else {
  console.log("O passageiro é menor de idade");
}

const media = 7;

let aluno1 = "Ricardo";
var notaP1 = 3;
var notaP2 = 7;

var mensao = (notaP1 + notaP2) / 2;

if (mensao >= media) {
  console.log(aluno1 + " Esta aprovado");
} else {
  console.log(aluno1 + " Esta reprovado");
}

let aluno2 = "Joana";
var notaP1 = 10;
var notaP2 = 9;

var mensao = (notaP1 + notaP2) / 2;

//porador ternário
aluno2 = media ? "Aprovado(a)" : "Reprovado(a)";
console.log(aluno2);
