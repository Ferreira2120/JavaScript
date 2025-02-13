let arr = [1, 3, 5, 7, 9];
console.log(arr);
arr.push(11, 12, "Pedro", "Sintia", false);

console.log(arr);

let el = arr.length;

console.log(el);

let clone = [].concat(arr);

let El = clone.pop();

console.log("o seu ultimo elemento é(com o clone: concat): " + El);
console.log(arr);

let primeiroEL = arr.shift();
console.log(primeiroEL);
console.log(arr);

let teste = arr.unshift(13, 24, 45);
console.log(teste);
console.log(arr);

let arr2 = arr.slice(5, 9);
console.log(arr2);

console.log("arr3");
console.log(arr);
//essa  variável arr3 vai receber o que foi excluido no arr pelo splice
let arr3 = arr.splice(2, 2, "splice");
console.log(arr);
console.log(arr3);
