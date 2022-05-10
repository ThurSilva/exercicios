// shift exclui o primeiro item do array / unshift inclui um registro ao inicio do array

let nomes = ["artur", "silva", "joao", "miguel"];

let elemRemove = nomes.shift();

console.log(nomes);
console.log(elemRemove);

nomes.unshift('luna');
console.log(nomes);
console.log(nomes[0]);