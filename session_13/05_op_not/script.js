const notab = /[^ab]/;  // ao utilizar o not ^, ele dara false ao encontrar por not deveria estar la

console.log(notab.test('a')); //false, pois encontrou oq not poderia kk
console.log(notab.test('fsdfgab')); //true, pois nao encontrou oq nao poderia

const az = /[^a-z]/;

console.log(az.test('123 as')); 
console.log(az.test('fsdfgab')); //false, pois encontrou oq not poderia
console.log(az.test('5fsdfgab')); 