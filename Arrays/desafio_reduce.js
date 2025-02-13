const numeros = [1, 3, 4, 1, 4, 5, 2, 5, 8, 9];
// const numerosUnicos = [1, 3, 4, 5, 2, 8, 9]; o foca do desafio é retornar dessa maneira
const numerosUnicos = numeros.reduce(function (numerosUnicos, Atl) {
  if (numerosUnicos.indexOf(Atl) < 0) {
    numerosUnicos.push(Atl);
  }
  return numerosUnicos;
}, []);
console.log(numerosUnicos);
