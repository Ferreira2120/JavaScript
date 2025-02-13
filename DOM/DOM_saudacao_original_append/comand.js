(function () {
  const nameUser = "Ferreira";

  if (nameUser) {
    const top_barElement = document.createElement("div");
    top_barElement.className = "top-bar";
    top_barElement.innerHTML = `<p> Olá, <b> ${nameUser} </b></p>`;

    // elementoPai.insertBefore(novoElement, elementRef)
    const elementoPai = document.querySelector(".hero");
    elementoPai.insertBefore(top_barElement, elementoPai.firstElementChild);
  }
})();
