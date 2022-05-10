// regex new  é usado para encontrar dentro de uma string algo especifico ou se ha apenas letras ou numeros

const reg1 = new RegExp('bola');  // padrao bola* deve ser encontrado na string

console.log(reg1.test('tem bola'));  //devera retornar true, pois encontrou o padrao
console.log(reg1.test('tem nao'));  // devera retornar false, pois nao ha o padrao

const reg2 = /bola/;  // outra forma de declarar o padrao

console.log(reg2.test('tem bola sim'));
console.log(reg2.test('tem nao'));

let text = 'tem bola la';
console.log(reg2.test(text)); // utilizando a variavel 

console.log(/quadrado/.test('aqui vai ter um quadrado')); // utilizando dentro de uma unica expressao o padrao e a verificação
console.log(/quadrado/.test(text)); // dará false, pois nao ha quadrado na string da variavel