const dia = /\d\d/; // verifica o padrao de dois numeros seguidos 

console.log(dia.test('2019')); // true, mesmo tendo quadro, ele encontra o padrao de dois seguidos
console.log(dia.test('2019')&& '2019'.length == 2 ); // false, pois demonstra nao ter apenas dois numeros
console.log(dia.test('asd')); // false
console.log(dia.test('05')); // true
console.log(dia.test('05')&& '05'.length == 2 ); //true, pois encontra dois numeros no comprimento
console.log(dia.test('asd1')); //false

const palavraPeloMenosTresLetras = /\w\w\w/; // encontrar um padrao de pelo menos tres letras seguidas
console.log(palavraPeloMenosTresLetras.test('asd')); 
console.log(palavraPeloMenosTresLetras.test('asdf')); // false
console.log(palavraPeloMenosTresLetras.test('as')); // false