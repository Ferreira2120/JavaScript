//Arrat formal
const arr = new Array();
console.log(arr);
const arr2 = new Array(
  true,
  "Pedro",
  "Amanda",
  30,
  12.334,
  new Array(2, 18.22, 12)
);
console.log(arr2);
console.log(arr2[2]);
console.log(arr2[5][1]);
console.log(arr2.length);
console.log(arr2[5].length);
console.log(arr2[5][arr2[5].length - 3]);

//Array literal

const arr3 = ["Pedro", "Amanda", 12.2, 14.5, true, false, 1];

console.log(arr3);
console.log(arr3.length);
