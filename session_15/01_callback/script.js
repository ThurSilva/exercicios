// callback pelo setimeout, limita um tempo para ser executada alguma função, seja ela para aparecer uma animação na pagina
// assincrona, que foge da estrutura, modendo ser executada em momentos diferentes

console.log('1');
console.log('2');
setTimeout (function() {
    console.log('3');
},2000);
setTimeout (function() {
    console.log('4');
},3000);
setTimeout (function() {
    console.log('5');
},4000);
