// (function () {
//   function cal_media() {
//     console.log(arguments);
//     let numeros = 0;
//     let qtd = arguments.length;
//     for (let i = 0; i < qtd; i++) {
//       if (typeof arguments[i] !== "number") {
//         throw Error("");
//       }
//       numeros += arguments[i];
//     }
//     return numeros / qtd;
//   }
//   let media = cal_media(2, 6);
//   console.log(media);
// })();

(function () {
  function cal_media() {
    console.log(arguments);
    let numeros = 0;
    let qtd = arguments.length;
    for (let i = 0; i < qtd; i++) {
      numeros += arguments[i];
    }
    return numeros / qtd;
  }
  let media = cal_media(2, 6, 15);
  console.log(media);
})();
