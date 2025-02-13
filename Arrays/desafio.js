//Criar duas funções que vai retornar um numero(sum: que é a soma dos parâmetros passados) e calcular a média(avarege: que é a soma dividido pelos argumentos passados)

/*
Fazer um função que vai somar todos os parametros da função:

Função(){
sabre quantos parametros foram passados
somar esses parametros

}


*/
function sum() {
  //from transforma os parametros em array
  //... transforma parametros em array
  let numeros = Array.from(arguments);
  return numeros.reduce(function (sum, atual) {
    return sum + atual;
  }, 0);
}

function avarege() {
  //arguments puxa os parametros da função e length puxa quantos dados estão sendo passados.
  return sum(...arguments) / arguments.length;
}
let Qtd_NUm = sum(1, 2, 3, 4);
console.log(Qtd_NUm);

let media = avarege(1, 2, 3, 4);
console.log(media);
