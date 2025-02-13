const produto = {
  nome: "Caneta",
  qtd: 10,
  //atribuindo uma função a uma propriedade
  comprar: function (ttp) {
    console.log(this);
    //this esta fazendo uma  referencia ao objeto produto
    if (ttp > this.qtd) {
      return "Quantidade não disponivel";

      // this.qtd -= ttp;
      this.qtd = this.qtd - ttp;
    }

    //também pode ser feito desse jeito
    // comprar(ttp) {
    //   console.log(this);
    //   //this esta fazendo uma  referencia ao objeto produto
    //   if (ttp > this.qtd) {
    //     return "Quantidade não disponivel";
    //   }
    //   // this.qtd -= ttp;
    //   this.qtd = this.qtd - ttp;
    // },
  },
  teste1: function () {
    console.log("teste1");
    console.log(this);
  },
  teste2: () => {
    console.log("teste2");
    console.log(this);
  },
};
produto.comprar(3);
// console.log(produto);
produto.teste1();
produto.teste2();
