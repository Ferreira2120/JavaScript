const title = document.createElement("h1");
//Criando atributo:
const CriarAtributo = document.createAttribute("id");
//Adicionando valor para o atributo:
CriarAtributo.value = "titulo-1";
console.log(title);
//Como vincular o atributo com o elemento h1?:
title.setAttributeNode(CriarAtributo);
//Outra forma de criar atributo:

title.setAttribute("title", "title inserido dinamicamente");
title.setAttribute("style", "color: green");

//Colocar um texto dentro do h1:

const text = document.createTextNode("Criar nós no DOM");

//Outra forma de colocar texto:

title.textContent = "Salve ";

title.appendChild(text);

console.log(title);

//Adiciona como ultimo item:
// document.querySelector("h2").appendChild(title);

//append e preppend passa mais de um parametro:

//Adiciona como ultimo item
// document.querySelector(".countainer").append(title);

//Adiciona como primeiro item
document.querySelector(".countainer").prepend(title, "Texto novo");

const novo_filho = document.createElement("h1");
novo_filho.textContent = "Novo texto ---";

const countainer = document.querySelector(".countainer");

//Aqui nós temos duas "fuções" que colocam o texto "Novo texto ---" em um lugar, mas o pq que está aparecendo apenas uma vez e não dua, sendo que, estou puxando duas funções. Porque apenas estamos movimentando o elemento de lugar, pois, o elemento ja existe no DOM, agora só estamos movimentandp
countainer.insertBefore(novo_filho, document.querySelector("ul"));
countainer.insertBefore(novo_filho, countainer.firstChild);

let sublevel = document.querySelector("ul ul");
sublevel = sublevel.cloneNode(true);
const h2 = document.querySelector("h2");

countainer.insertBefore(sublevel, h2.nextElementSibling);
countainer.insertBefore(sublevel, h2.nextElementSibling);
