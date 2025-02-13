let arr = [1, 2, 3, 4, 5, 6, 7];

//isso não é um array de verdade, mas sim um destructoring
const [n1, ...n2] = arr;
console.log(n1, n2);
