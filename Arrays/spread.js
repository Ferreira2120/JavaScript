// "..." -> esta se referindo e spread operator
let arr = [];
let arr2 = [4, 5, 6];

function sum() {
  console.log(arguments);
  console.log(arguments.length);
}

sum(1, 2, 3); // arguments.length = 3
sum(arr); // arguments.length = 1
sum([1, 2, 3]); // mesma coisa do de cima

sum(...[1, 2, 3]);
sum(...[arr]);

arr.push(...arr2);
console.log(arr);
