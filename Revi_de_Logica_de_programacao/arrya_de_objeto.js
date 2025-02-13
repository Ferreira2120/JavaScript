const nome = ["Pedro", "Amanda", "Alicia"];
const pessoa = { nome: "Raimundo", idade: 56 };

//pode tanto colocar os dados dos objetos dentro da array como tambem pode colocar o objeto externo da array
const pessoas = [
  { nome: "Pedro", idade: 18 },
  { nome: "Amanda", idade: 20 },
  { nome: "Alicia", idade: 26 },
  pessoa,
];

console.log(pessoas);
console.log(pessoas[2].nome);

for (let i = 0; i < pessoas.length; i++) {
  console.log(`${pessoas[i].nome} e tem ${pessoas[i].idade}`);
}
