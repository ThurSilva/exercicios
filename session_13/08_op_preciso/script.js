const cep = /\d{5}-\d{3}/;  // ao utilizar o '{}-{}', determinamos o padrão 

console.log(cep.test("99999-000")); 
console.log(cep.test("0000-000")); // false
console.log(cep.test("00000000")); // false

//const tel = /    \(\d{2}\)   \d{4,5}   -   \d{4}     /; // como ( ) é um caracter especial usamos o \ antes deles 
const tel = /\(\d{2}\)\d{4,5}-\d{4}/;
console.log(tel.test('(11)95238-4751')); 
console.log(tel.test('(11)4187-5260')); 
console.log(tel.test('1152384781')); // false
console.log(tel.test('115238-4781')); // false