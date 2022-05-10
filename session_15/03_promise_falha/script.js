// promise é a promessa, separação de algo sera feito quando chamado

let p = Promise.resolve(new Error('nao deu certo'));

console.log('agr nao');
console.log('agr ainda nao');

p.then(value => console.log(value))   // observe que n utilizei o ;  pois na linha debaixo utilizei o .then ainda me referindo a ele
 .catch(reason => console.log('falhou: ' + reason));