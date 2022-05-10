const validarEmail = /\w+.@\w+\.\w+/;  // lembranod que . é especial entao usamos a \ antes dele

console.log(validarEmail.test('artur.sphv@gmail.com')); 
console.log(validarEmail.test('luciana@hotmail.com.br')); 
console.log(validarEmail.test('@luana@.com'));
console.log(validarEmail.test('gmail')); 