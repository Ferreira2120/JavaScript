let arr = [4, 5, 10, 20, 35, 4, 5];
console.log(arr.lastIndexOf(5));

console.log(arr.includes(10));
console.log(arr.includes(40));

console.log(
  arr.find(function (el) {
    return el > 10;
  })
);

console.log(
  arr.findIndex(function (el) {
    return el > 10;
  })
);
