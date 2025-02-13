console.log(document.body);
console.log(document.body.parentElement);
console.log(document.body.parentNode);

const html = document.body.parentNode;

console.log(document.body.parentElement == document.body.parentNode);

console.log(html.parentElement);
console.log(html.parentNode);

const h2 = document.querySelector("h2");
//nextElementSibling vai mostra o próximo irmão(elemento) do h2: ul>li's
const h2NextSibling = h2.nextElementSibling;
h2NextSibling.style.background = "blue";

console.log(h2.previousElementSibling);

const link = document.querySelector("a");
const list = document.querySelector("ul ul");
console.log(link);

console.log(link.parentElement.firstChild);
console.log(link.parentElement.firstElementChild);
console.log(list.lastElementChild.hasChildNodes());
console.log(list.lastElementChild.childNodes);
