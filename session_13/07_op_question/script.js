const notab = /abacax?i/;  // ao utilizar o ?, o caracter anterior será opcional na validação

console.log(notab.test('abacaxi')); 
console.log(notab.test('abacai')); 
console.log(notab.test('1562asd')); // false