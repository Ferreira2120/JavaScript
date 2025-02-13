function receber(n1, n2) {
  if (typeof n1 !== "number" || typeof n2 !== "number") {
    throw Error("só aceita numeros");
    // alert("só numeros");
  }
  return n1 + n2;
}

receber("a");

let soma = "";
try {
  soma = receber(3, "a");
} catch (e) {
  console.log("Ocorreu um erro");
  console.log(e.message);
}
console.log(soma);
