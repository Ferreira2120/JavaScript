let n = "Global n";

function mostraN() {
  let n1 = " n1 local ";

  if (true) {
    //com let, não funciona, é colocado que o n2 não foi definido, pq o let gera um escopo de bloco, mas com var funciona, pq o var gera um escopo de função
    //let n2 = " n2 dentro de if com let ";
    var n3 = "n3 dentro de if com var";
  }
  console.log("valor de n1 é:" + n1);
  console.log("valor de n3 é:" + n3);
  //console.log("valor de n2 é:" + n2);
}

mostraN();
console.log("valor de n é:" + n);

//funções alinhadas

function fnExtr() {
  let n = 10;

  function fnIntr() {
    let n = "20";
    console.log("valor de n dentro do fnIntr: " + n);
  }
  //funciona, pq esta dentro do escopo da função Extr
  fnIntr();
  console.log("valor de n no fnExtr:" + n);
}
//não funciona, pq esta fora do escopo da função Extr
//fnIntr();
fnExtr();
