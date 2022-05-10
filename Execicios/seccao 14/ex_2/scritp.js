const id = /\d+ID\b/;  // o \b elege o que termina no padrao

console.log(id.test("251898id")); 
console.log(id.test("251898ID"));  // true
console.log(id.test("esse é meu id")); 
console.log(id.test("esseémeuID"));