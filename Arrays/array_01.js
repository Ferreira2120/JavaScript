const arr = [1, 23, 34, "Pedro", false];

//Some: Se pelo menos um elemento for do dado solicidado
// let so_number = arr.some(function (el) {
//   return typeof el === "number" && el > 70;
// });

//every: Se todos os elementos forem do mesmo dado.
// let so_number = arr.every(function (el) {
//   return typeof el === "number" && el > 70;
// });

//Filter: Vai filtar os dados da array e só retornar o que for de acordo com o que a função pede
let arr1 = arr.filter(function (el1, i, _arr) {
  return typeof el1 === "number";
});
// console.log(arr1);

// const arr2 = arr.forEach(function (el, i, _arr) {
//   console.log(el, i);
// });

// let arr2 = [];
// arr.forEach(function ser(el, i, _arr) {
// console.log(i, "-", el);
// return true;
// if(typeof el === "number"){}
// });

let arr2 = arr1.map(function (el1, i, _arr) {
  return el1 * el1;
});

console.log(arr);
console.log(arr1);
console.log(arr2);
