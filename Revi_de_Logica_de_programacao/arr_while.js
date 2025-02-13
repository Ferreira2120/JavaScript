//criar array com numeros randomicos nao repetidos

function gerarRandom(max) {
  return parseInt(Math.random() * max);
}

let arr = [];

while (arr.length < 20) {
  let rand = gerarRandom(30);
  console.log(rand);

  if (arr.indexOf(rand) < 0) {
    arr.push(rand);
  }
}
console.log(arr);
