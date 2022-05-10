const validarData = /[0-9]{2}[/][0-9]{2}[/][0-9]{4}/;  // tive que usar [/] pois confunde com a / /; 
//const validarData = /[0-31]{2}[/][0-12]{2}[/][1900-2021]{4}/;  // posso delimitar a quantidade
console.log(validarData.test('20/05/19966')); // cuidado o ano passou pois ele verifica se existem no minimo 4
console.log(validarData.test('25/25/9999')); 
console.log(validarData.test('25/30/5'));
console.log(validarData.test('00/00/0000')); 