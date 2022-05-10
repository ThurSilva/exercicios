const validarDominio = /[?www.]\w+.com.br|.com/;  // choice|pattern|da opção para a busca
// [?xxx] torna essa expressão opciona
console.log(validarDominio.test('www.google.com.br')); 
console.log(validarDominio.test('www.gmail.com')); 
console.log(validarDominio.test('gmail.com.br'));
console.log(validarDominio.test('gmail')); 