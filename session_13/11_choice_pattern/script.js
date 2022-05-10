const reg = /\w+: (artur|ricardo|fernando)/;  // choice|pattern|da opção para a busca

console.log(reg.test('nome: matheus')); //false
console.log(reg.test('nome: artur')); 