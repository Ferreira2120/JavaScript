(function () {
  const nameUser = null;
  const elemento = document.querySelector(".top-bar p");
  if (nameUser) {
    //   document.querySelector(".top-bar p").textContent =
    // "Bem-Vindo(a), " + nameUser;
    console.log(elemento.textContent);
    //   elemento.textContent = elemento.textContent + nameUse; com textContent não funciona, pq ele não reconhece tag html
    //colocando o nome do usuario em negrito
    elemento.innerHTML += "<b>" + nameUser + "</b>";
  } else {
    // elemento.parentElement.style.display = "none";
    // elemento.remove();
    const elementoParaRemover = elemento.parentElement;
    elementoParaRemover.parentElement.removeChild(elementoParaRemover);
  }
  console.log(elemento);
})();
