let x = 10;
x = "string";
console.log(x);

//colocando "" em uma string sem dar erro
let msg = 'uma "string';
console.log(msg);

//Not a number
console.log("NAN" * 2);

//this dinamico
function teste() {
  console.log(this);
}
teste();

const obj = {
  nome: "Pedro",
  //   teste: teste,
  teste,
  //quando se tem propriedade e valor do mesmo nome, você pode colocar a penas o nome de algo
};

obj.teste();
