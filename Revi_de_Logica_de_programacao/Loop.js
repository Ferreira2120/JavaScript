let numero = prompt("Digite um  numero");

let indice = 0;

while (indice <= 10) {
  document.write(`${indice} x ${numero} = ${indice * numero} <br>`);
  indice++;
}
document.write("saiu do loop while<br>");
do {
  if (indice > 10) {
    alert("O numero é maior que 10");
    break;
  }
  document.write(`${indice} x ${numero} = ${indice * numero} <br>`);
  indice++;
} while (indice <= 10);
{
  document.write("saiu do loop do while<br>");
}

for (let j = 0; j <= 10; j++) {
  if (j === 5) {
    continue;
  }
  document.write(`${j} x ${numero} = ${j * numero} <br>`);
}
