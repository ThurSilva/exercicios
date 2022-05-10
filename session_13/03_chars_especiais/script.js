const pontoRegex = /./;  // uso do ponto para verificar, aceita tudo, espaços numeros e letras

console.log('.')
console.log(pontoRegex.test('asd'));
console.log(pontoRegex.test(' '));
console.log(pontoRegex.test('123'));
console.log(pontoRegex.test('123asd'));

const dRegex = /\d/;  // uso do \d para apenas numericos | igual ao [0-9]

console.log('\d')
console.log(dRegex.test('asd')); //false
console.log(dRegex.test(' '));   // false
console.log(dRegex.test('123'));
console.log(dRegex.test('123asd'));

const dRegex2 = /\D/;  // ao contrario do minusculo ele rejeita oq for apenas numericos

console.log('\D')
console.log(dRegex2.test('asd')); 
console.log(dRegex2.test(' '));  
console.log(dRegex2.test('123')); // false
console.log(dRegex2.test('123asd'));

const sRegex = /\s/;  // verifica espaços  ... lembrando se caso fosse S maiusculo, seria o oposto rejeito espaços
console.log('\s')
console.log(sRegex.test('asd')); // false
console.log(sRegex.test(' '));  
console.log(sRegex.test('123')); // false
console.log(sRegex.test('123 asd'));

const wRegex = /\w/;  // aceita apenas de 0-9 e de a-z
console.log('\w')
console.log(wRegex.test('asd')); 
console.log(wRegex.test(' '));  // false
console.log(wRegex.test('123')); 
console.log(wRegex.test('123asd'));