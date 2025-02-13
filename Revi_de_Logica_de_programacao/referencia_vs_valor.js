function alterarArray(arr) {
  arr.push("adicionado");
}

let a = ["a1"];

console.log(a);
alterarArray(a);
console.log(a);

function alteraPrimitivo(p) {
  p += " adicionado";
}
let msg = "mensagem";
console.log(msg);
alteraPrimitivo(msg);
console.log(msg);
