let arr = [1, 2, 3, "Neymar"];
const obj = {
  nome: "pedro",
  idade: 18,
  altura: 1.7,
};

for (let prop in obj) {
  console.log(prop);
  console.log(obj[prop]);
}

console.log("for of");
for (n of arr) {
  console.log(n);
}
