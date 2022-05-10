// uso do [ ] para delimitar um intervalo de padrao

const reg1 = /[12345]/;

console.log(reg1.test('temos o n 6')); // false, pois nao esta no padrao
console.log(reg1.test('temos o n 2')); // true, pois esta no padrao
console.log(reg1.test('temos o n 23')); // true, pois comeca com um numero do padrao
console.log(reg1.test('temos o n 60')); // false, pois comeca com fora do padrao

const reg2 = /[0-9]/;  //ideal para verificar a existencia de um numerico na string

console.log(reg2.test('temos o n 6681651684')); // true pois identifica todos os numeridos dentro do intervalo do padrao
console.log(reg1.test('temos o n')); // false, pois nao ha numericos