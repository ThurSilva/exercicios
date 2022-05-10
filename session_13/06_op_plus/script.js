const notab = /\d+/;  // ao utilizar o +, verificará a sequencia do numerico ou alpha .... 

console.log(notab.test('123156')); 
console.log(notab.test('fsdfgab')); // false
console.log(notab.test('1562asd'))