// slice pega parte do array nos parametros (posição,ate), sendo exibido o anterior a ele.
// Sendo que, nao determinando o 'ate', ele ira coletar todos a partir daquela 'posição'
// 'posição' negativo, conta apenas a partir do fim do array
// 'ate' negativo, elimina da exibição, os ulitmos valores a exibir
let nums = [1,2,3,4,5,6,7,8,9];

console.log(nums.slice(2,3));
console.log(nums.slice(2,4));
console.log(nums.slice(2));
console.log(nums.slice(-2));
console.log(nums.slice(2,-2));