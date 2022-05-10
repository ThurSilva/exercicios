let novoElemento = document.createElement("p"); //estou pedindo para criar um paragrafo novo
let texto = document.createTextNode('algum texto novo'); //estou determinando qual seria o texto a ser inserido nesse novo elemento

novoElemento.appendChild(texto); // estou associando os dois, o paragrafo ao texto

let p = document.querySelector('#paragrafo-principal'); //identificando o pai
let pai = p.parentNode; // para acessar o elemento pai

pai.appendChild(novoElemento); // chamando o appendchild que sempre criará um novo elemento ao fim do pai (da div por exemplo)