// promise é a promessa, separação de algo sera feito quando chamado

let p = Promise.resolve(5+1);

console.log('agr nao');
console.log('agr ainda nao');

p.then((value) => {return value + 5})   // observe que n utilizei o ;  pois na linha debaixo utilizei o .then ainda me referindo a ele
 .then((value) => {console.log(value)});