let novoElemento = document.createElement("p"); //estou pedindo para criar um paragrafo novo
let texto = document.createTextNode('algum texto novo'); //estou determinando qual seria o texto a ser inserido nesse novo elemento

novoElemento.appendChild(texto); // estou associando os dois, o paragrafo ao texto

let elementoAlvo = document.querySelector('#titulo-principal');
let elementoPai = document.querySelector('#container_principal');

elementoPai.insertBefore(novoElemento, elementoAlvo); // estou pedindo para colocar antes do pai(div) e a referencia, exatamento antes do (titulo h1)