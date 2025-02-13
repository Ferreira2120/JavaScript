let arr = [1, 2, 3, 4];
let arr_reverse = [].concat(arr);

console.log(arr_reverse.reverse());
console.log(arr);
console.log("reduce");

let j = 0;
const soma = arr.reduce(function (acumulador, vlAltual, i, _arr) {
  console.log("i: " + i);
  console.log("J: " + j++);
  console.log(_arr);
  console.log("acumulador: " + acumulador, "Valor atual: " + vlAltual);
  return acumulador + vlAltual;
}, 0);
console.log(soma);

const nomes = ["Pedro", "Amanda", "Alicia", "Raimundo", "Sintia"];
let nomes_porOrdem = nomes.reduce(function (nome, nomeAtual) {
  /*
    na primeira interação:
    nomes = {objeto vazio}
    nomaAtual = "Pedro" -> prim_letra = nomeAtual[0] = "P"
    return {P = 1}

    ne segunda interação:
    nomes = {P = 1}
    nomeAtual + "Amanda" -> prim_letra = "A"
    return 
    {
    P = 1
    A = 1
    }

    nomes = {P = 1, A = 1}
    nomeAtual + "Alicia" -> prim_letra = "A"
    return 
    {
    P = 1,
    A = 1,
    }

    nomes = {P = 1, A = 2}
    nomeAtual + "Alicia" -> prim_letra = "A"
    return 
    {
    P = 1,
    A = 2,
    } entrou no if: "se tiver a letra conta 1, e se tiver a mesma letra conta mais 1"

    ...
    */
  //uma string pode ser tratada como se fosse uma array
  let prim_letra = nomeAtual[0];
  if (nomes[prim_letra]) {
    nomes[prim_letra]++;
  } else {
    nomes[prim_letra] = 1;
  }
  return nomes;
}, {});

console.log(nomes_porOrdem);
