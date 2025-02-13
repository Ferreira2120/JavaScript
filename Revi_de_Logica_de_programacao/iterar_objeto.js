const pessoa = {
  nome: "Pedro",
  idade: 18,
  email: "pedroferr@gmail.com",
  cpf: 78549330166,
};

console.log(pessoa);

for (let prop in pessoa) {
  console.log(pessoa[prop]);
}
