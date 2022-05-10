const ip = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/;  // o \b elege o que termina no padrao

console.log(ip.test("102.0.0.0")); 
console.log(ip.test("10.0.0.1")); 
console.log(ip.test("10122.0598.0.1000")); 
