const txtEmail = document.getElementById("txtEmail");
const msgFeedback = document.getElementById("newsletterFeedback");

function cadastrarEmail() {
  let Email = txtEmail.value;
  msgFeedback.innerHTML = `O email ${Email} foi cadastrado com sucesso`;
}
