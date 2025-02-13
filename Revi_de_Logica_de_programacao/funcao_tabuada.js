const output = document.getElementById("output");

function MostrarTabuada() {
  //pedir para o usuário digitar um numeero
  let n = parseFloat(prompt("Digite um numero"));
  //n = parseInt(n);
  //mostrar a tabuada desse numero de 1 a 1000
  let msg = "";
  for (let i = 0; i <= 1000; i++) {
    if (i === 10) {
      break;
    }
    msg += `${n} x ${i} = ${n * i} <br>`;
  }
  output.innerHTML = msg;
  //toda informação que vem da interface do usuário é string
}

function LimparTabuada() {
  output.innerText = "";
}
