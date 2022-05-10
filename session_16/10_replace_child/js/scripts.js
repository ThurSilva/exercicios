let novoElemento = document.createElement("p"); //estou pedindo para criar um paragrafo novo
let texto = document.createTextNode('algum texto novo'); //estou determinando qual seria o texto a ser inserido nesse novo elemento

novoElemento.appendChild(texto); // estou associando os dois, o paragrafo ao texto

let heading = document.querySelector('#titulo-principal');
let paiHeading = heading.parentNode;

paiHeading.replaceChild(novoElemento,heading);