function imc(peso, altura) {
  //se peso e altura não forem definidos, vai geral um erro 'throw Error'
  if (peso === undefined || altura === undefined) {
    throw Error("Valores indefinidos");
  }
  //calcular imc
  calc = peso / (altura * altura);
  console.log(calc);
}
function classificarIMC(IMC) {
  //entregar iinformações para cada paciente de acordo com seu imc
  if (IMC <= 16.9) {
    return "muito abaixo do peso";
  } else if (IMC <= 18.4) {
    return "abaixo do peso";
  } else if (IMC <= 24.9) {
    return "normal";
  } else if (IMC <= 34.9) {
    return "obesidade 1";
  } else if (IMC <= 40) {
    return "obesidade 2";
  } else {
    return "obesidade 3";
  }
}

let IMC = imc(80, 1.65);
console.log(IMC);
console.log(classificarIMC(IMC));
